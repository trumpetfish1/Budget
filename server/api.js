const express = require('express');
const apiRouter = express.Router();


//define  
const envelopesRouter = require('./envelopes');

// ./envelopes must start Router()
// nested Routers apiRouter>envelopesRouter
apiRouter.use('/envelopes', envelopesRouter);


module.exports = apiRouter;