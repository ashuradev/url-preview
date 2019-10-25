const express = require('express')
const router = express.Router()

const urlParser = require('url')
const fetch = require('node-fetch')
const domino = require('domino')

const { createObjectFromEntries } = require('./../utils/collections')

router.post('/preview', async (req, res) => {
    // Trata todos os errors gerados na preview da URL

    try {

        // Checa se há o parâmetro da URL no corpo do request.
        // Se não tiver, este if lançará um Erro

        if (!req.body.url) {
            const err = new Error('The URL field is required.')

            err.statusCode = 400

            throw err
        }

        const body = await (await fetch(url)).text()

        const document = domino.createWindow(body).document

        const domain = urlParser.parse(url).hostname
        
        // Irá procurar todas as meta tags do OG no HTML e retornar um array
        const openGraphElements = Array.from(document.querySelectorAll('meta[property*="og"]'))

        // Aqui são os apelidos das propriedades das meta tags do OG
        // Exemplo, o nome da propriedade site_name irá ser substituída por sitename
        const aliases = {
            site_name: 'sitename',
            image: 'thumbnail'
        }

        const crawledData = createObjectFromEntries(openGraphElements.map(node => {
            const property = node.getAttribute('property').replace('og:', '').replace(':', '_')
            
            const value = node.getAttribute('content')

            return [
                aliases[property] ? aliases[property] : property, 
                value
            ]
        }))

        crawledData.domain = domain;

    } catch (err) { 
        
        res.status(err.statusCode ? err.statusCode : 500).json({
            error: err.message
        })
        
    }
})

module.exports = router