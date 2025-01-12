import { pg } from "drizzle-orm/pg";
import { migrate } from "drizzle-orm/migrate";

const db = pg({
    connectionString: process.env.DATABASE_URL || "postgres://user:password@localhost:5432/dbname",
});

export default db;

// If migrations are needed
export const migrations = migrate(db);
