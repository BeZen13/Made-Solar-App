const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/Made-Solar-App',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('You are connected to the Made-Solar-App DB')
)

app.use("/send", require("./routes/submitRouter"));

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET })) //req.user
app.use('/api/lead', require('./routes/leadsRouter.js'))
app.use('/api/proposal', require('./routes/proposalsRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})


app.listen(8888, () => {
    console.log('The Made-Solar-App server is running on local port 8888!')
})