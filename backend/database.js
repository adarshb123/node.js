const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { Pool } = require('pg');

const postgresURL = 'postgres://postgres:postgres@localhost:5432/postgres';
if (!postgresURL) {
  console.error('Missing POSTGRES_URL environment variable.');
  process.exit(1);
}

// Create a new PostgreSQL pool instance
const pool = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/postgres"
});
console.log("connectionString: " + postgresURL);
console.log(typeof(postgresURL));


// Connect to the PostgreSQL database
pool.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
  })
  .catch((error) => {
    console.error('Error connecting to the PostgreSQL database:', error);
  });

// Export the pool
module.exports = {pool};
