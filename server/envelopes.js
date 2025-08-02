const envelopesRouter = require('express').Router();

module.exports = envelopesRouter;

const { envelopes } = require('./data')

console.log('asd')

envelopesRouter.get('/', (req, res, next) => {
    console.log( envelopes)
    res.send(envelopes)
})