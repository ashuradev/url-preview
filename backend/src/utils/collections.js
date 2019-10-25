/**
 * Cria um objeto a partir de um conjunto de entradas, ex:
 * 
 * [['oi', 'tudo'], ['eae', 'ola']] -> {oi: 'tudo', eae: 'ola'}
 */
const createObjectFromEntries = entries => Object.assign({}, ...entries.map(([ key, value ]) => ({ [key]: value })))

module.exports = {
    createObjectFromEntries
}