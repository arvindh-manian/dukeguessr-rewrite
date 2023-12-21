import { Pool } from "pg";

const pool: Pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Use this only if your RDS instance isn't using an SSL certificate.
  },
});

const query = (text: any, params?: any[]) => pool.query(text, params);

export default query;
