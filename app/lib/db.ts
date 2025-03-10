import mysql from 'mysql2/promise'

// Pool instead of single connection for better reliability
let pool: mysql.Pool | null = null;

export async function createConnection() {
    if (!pool) {
        pool = mysql.createPool({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        console.log('DB Pool created');
    }
    return pool;
}

// Function to check connection and reconnect if needed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function executeQuery(query: string, params: any[] = []) {
    const db = await createConnection();
    try {
        // console.log('Params from DB: ', params)
        const [results] = await db.query(query, params);
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}