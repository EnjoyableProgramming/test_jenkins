const express = require('express')
const cors = require('cors')
const { json, urlencoded } = express
const app = express()
const port = process.env.PORT || 4300
app.use(json())

app.use(urlencoded({ extended: false }))
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }

app.use(cors(corsOptions))

app.use('/', (req, res) => { res.send("this is the API v1.0.1"); })

app.listen(port, () => { console.log(`Server listening on port ${port}`); })
