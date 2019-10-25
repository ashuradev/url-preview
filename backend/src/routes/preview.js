const express = require('express')
const router = express.Router()

const crawl = require('./../services/crawler')

router.post('/preview', async (req, res) => {
    try {
        if (!req.body.url) {
            const err = new Error('The URL field is required.')

            err.statusCode = 400

            throw err
        }

        res.json(await crawl(req.body.url))
    } catch (err) { 
        res.status(err.statusCode ? err.statusCode : 500).json({
            error: err.message
        })
    }
})

module.exports = router