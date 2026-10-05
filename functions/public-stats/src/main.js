import { Client, TablesDB, Query } from 'node-appwrite';

const DATABASE_ID = '6a9dc3e9002706223bd6';
const PASSENGERS_TABLE_ID = 'passengers';
const DRIVERS_TABLE_ID = '6a9e54ea002e80f59e80';
const RIDE_REQUESTS_TABLE_ID = '6a9dc452001e93e8d238';
const RATINGS_TABLE_ID = '6aa9dccd0031be68ce31';

const CORS = {
  'Access-Control-Allow-Origin': 'https://pyayoway.github.io',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': '86400',
  'Cross-Origin-Resource-Policy': 'cross-origin',
  'Vary': 'Origin',
  'Cache-Control': 'public, max-age=3600'
};

function makeClient(req) {
  return new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key']);
}

async function countRows(tablesDB, tableId, queries = []) {
  const result = await tablesDB.listRows({
    databaseId: DATABASE_ID,
    tableId,
    queries: [...queries, Query.limit(1)],
    ttl: 3600
  });

  return Number(result.total || 0);
}

async function getAverageRating(tablesDB) {
  let total = 0;
  let count = 0;
  let cursor = null;

  while (true) {
    const queries = [
      Query.select(['rating']),
      Query.limit(100)
    ];

    if (cursor) {
      queries.push(Query.cursorAfter(cursor));
    }

    const page = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: RATINGS_TABLE_ID,
      queries,
      total: false,
      ttl: 3600
    });

    for (const row of page.rows) {
      const value = Number(row.rating ?? row.data?.rating);
      if (Number.isFinite(value) && value >= 1 && value <= 5) {
        total += value;
        count += 1;
      }
    }

    if (page.rows.length < 100) {
      break;
    }

    cursor = page.rows[page.rows.length - 1].$id;
  }

  return {
    ratingAverage: count > 0 ? Number((total / count).toFixed(1)) : 0,
    ratingCount: count
  };
}

export default async ({ req, res, log, error }) => {
  if (req.method === 'OPTIONS') {
    return res.empty(204, CORS);
  }

  if (req.method !== 'GET') {
    return res.json(
      { ok: false, error: 'Method not allowed' },
      405,
      CORS
    );
  }

  try {
    const tablesDB = new TablesDB(makeClient(req));

    const [
      completedRides,
      registeredPassengers,
      activeDrivers,
      ratingSummary
    ] = await Promise.all([
      countRows(
        tablesDB,
        RIDE_REQUESTS_TABLE_ID,
        [Query.equal('status', ['completed'])]
      ),
      countRows(
        tablesDB,
        PASSENGERS_TABLE_ID
      ),
      countRows(
        tablesDB,
        DRIVERS_TABLE_ID,
        [Query.equal('online', [true])]
      ),
      getAverageRating(tablesDB)
    ]);

    return res.json(
      {
        ok: true,
        completedRides,
        registeredPassengers,
        activeDrivers,
        ratingAverage: ratingSummary.ratingAverage,
        ratingCount: ratingSummary.ratingCount,
        updatedAt: new Date().toISOString()
      },
      200,
      CORS
    );
  } catch (e) {
    error(String(e));
    log('public-stats failed');

    return res.json(
      {
        ok: false,
        error: 'Unable to load public statistics'
      },
      500,
      CORS
    );
  }
};
