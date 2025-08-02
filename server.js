
const express = require('express');
const app = express();

module.exports = app;

const PORT = 4001;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());


// Add middware for parsing request bodies here:
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

// displays what's in public
app.use(express.static('public'));


// Add your code to start the server listening at PORT below:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

