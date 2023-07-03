// database.js
const { Client } = require('pg');

// Create a new PostgreSQL client instance
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Adarsh@123',
  port: 5432, // Default PostgreSQL port
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
  })
  .catch((error) => {
    console.error('Error connecting to the PostgreSQL database:', error);
  });

// Export the client
module.exports = client;
