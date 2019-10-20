const app = require('express')()

app.get('/', (req, res) => res.write('Olá, mundo!'))

app.listen(3000, () => console.log('Running at http://127.0.0.1:3000')) 