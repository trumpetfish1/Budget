const envelopesRouter = require('express').Router();


const { envelopes } = require('./data')


envelopesRouter.get('/', (req, res, next) => {
    console.log('return from get')
    res.send({envelopes})
})

envelopesRouter.post('/', (req, res, next) => {
    newEnvelope = String(req.query.envelope)
    newAmount = Number(req.query.amount)
    const existing = envelopes.find(e => e.envelope === newEnvelope);
    if (existing) {
        existing.amount += newAmount
    } else {
    envelopes.push({ envelope: newEnvelope, amount: newAmount })
    }
    res.send({envelopes})
})


module.exports = envelopesRouter;