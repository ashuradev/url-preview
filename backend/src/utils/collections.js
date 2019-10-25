const createObjectFromEntries = entries => Object.assign({}, ...entries.map(([ key, value ]) => ({ [key]: value })))

module.exports = {
    createObjectFromEntries
}