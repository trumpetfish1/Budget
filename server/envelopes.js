const envelopesRouter = require('express').Router();

module.exports = envelopesRouter;

envelopes = require('./data')

envelopesRouter.get('/', (req, res, next) => {
    console.log( envelopes)
    res.send(200)
})