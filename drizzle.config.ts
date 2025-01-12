import { defineConfig } from 'drizzle-kit';
import { pg } from 'drizzle-orm/pg';
import { migrate } from 'drizzle-orm/migrate';

const db = pg({
	connectionString: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/dbname',
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		url: process.env.DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: 'postgresql'
});

export default db;

// If migrations are needed
export const migrations = migrate(db);
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
