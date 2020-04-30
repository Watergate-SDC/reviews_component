const express = require('express')
const app = express()
const port = 9000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server running, catch it on port ${port}`))