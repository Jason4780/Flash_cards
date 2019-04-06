const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static('public'))
const HomePageroutes = require('./routes/index')
const cardRoutes = require('./routes/cards')

app.use(HomePageroutes)
app.use('/cards', cardRoutes)

app.set('view engine', 'pug')


app.listen(3000, ()=>{
    console.log('Express is running on localhost:3000!')
})
 


/*app.use((req, res, next)=>{
    const err = new Error('not')
    err.status=500
    next(err)
 })*/

app.use((req, res, next)=>{
    const err = new Error('not found')
    err.status=404
    next(err)
 })

 app.use((err, req, res, next)=>{
    res.locals.error= err
    res.status(err.status)
    res.render('error')
 })
 