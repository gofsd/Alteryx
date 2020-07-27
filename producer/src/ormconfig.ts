import process from 'process';

const username = process.env.POSTGRES_USER || "postgres";
const password = process.env.POSTGRES_PASSWORD || "example";
const pg_host = process.env.POSTGRES_HOST || "localhost"

export default {
  "type": "postgres",
  "host": pg_host,
  "port": 5432,
  username,
  password,
  "database": "postgres",
  "synchronize": true,
  "dropSchema": false,
  "logging": true,
  "keepConnectionAlive": true,
  "entities": [
    __dirname + "/src/**/*.entity.ts",
    __dirname + "/dist/**/*.entity.js",
    '/usr/src/app/src/**/*.entity.ts',
    '/usr/src/app/src/**/*.entity.js'
  ],
  "migrations": ["migrations/**/*.ts"],
  "subscribers": ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src",
    "migrationsDir": "migrations",
    "subscribersDir": "subscriber"
  }
}