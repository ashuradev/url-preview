const urlParser = require('url')
const fetch = require('node-fetch')
const domino = require('domino')

const { createObjectFromEntries } = require('./../utils/collections')

const crawl = async url => {
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

    // obs: createObjectFromEntries() é o pollyfill do Object.fromEntries() do ES5
    const crawledData = createObjectFromEntries(openGraphElements.map(node => {
        const property = node.getAttribute('property').replace('og:', '').replace(':', '_')
        
        const value = node.getAttribute('content')

        return [
            aliases[property] ? aliases[property] : property, 
            value
        ]
    }))

    crawledData.domain = domain;

    return crawledData
}

module.exports = crawl