const express = require('express')
const app = express()
var router = express.Router()

const port = 3000

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    console.log("************************************************************************")
    console.log(req.url)    
    console.log(res.params)    
    next()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

app.use("/static", express.static("public"))
app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))