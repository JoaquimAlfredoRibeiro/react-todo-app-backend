module.exports = function (req, res, next) {
    res.head('Access-Control-Allow-Origin', '*')
    res.head('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.head('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}

