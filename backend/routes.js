// routes.js
const express = require('express');
const router = express.Router();
const database = require('./database');

// Search endpoint
router.get('/search', (req, res) => {
  const { studentClass, subject, year } = req.query;
  console.log('Received search request:', studentClass, subject, year);

  // Construct the SQL query
  const query = {
    text: `SELECT * FROM question_papers WHERE student_class ILIKE $1 AND subject ILIKE $2 AND year = $3`,
    values: [studentClass, subject, year],
  };

  // Execute the query
  database.query(query)
    .then((result) => {
      console.log('Query result:', result.rows);

      const questionPaper = result.rows[0];

      // Check if the question paper exists
      if (!questionPaper) {
        console.log('Question paper not found.');
        res.status(404).json({ error: 'Question paper not found.' });
        return;
      }

      // Render the template with the query result
      res.render('result', { questionPaper });
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).send('An error occurred while fetching data.');
    });
});

// Export the router
module.exports = router;
