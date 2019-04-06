const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    const persons = req.cookies.user
    if(persons === undefined){
        res.redirect('/hello')
    }else{
    res.render('index',  {person: persons})
    }
})


router.get('/hello', (req, res)=>{
    const persons = req.cookies.user
    if(persons){
        res.redirect('/')
    }else{
        res.render('hello')
    }
})

router.post('/hello', (req, res)=>{
    res.cookie('user', req.body.username)
    res.redirect('/')
})


router.post('/goodbye', (req, res)=>{
    res.clearCookie('user')
    res.redirect('/hello')
})


module.exports= router;