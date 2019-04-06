const express = require('express');
const router = express.Router();
const data = require('../data/flashcardData.json').data
const cards = data.cards
//gets a random flashcard for us
router.get('/', (req, res)=>{
    const numberOfCards = cards.length
   const randomCard= Math.floor(Math.random() * numberOfCards)
   res.redirect(`/cards/${randomCard}`)
})
//uses ID as parameter to be entered in after cards to get array index number
router.get('/:id', (req, res)=>{
    const {cardSide} = req.query
    const id = req.params.id
    //adds query string if there is none /cards/4 for example it will add a string to that
   if(!cardSide){
      return  res.redirect(`/cards/${id}?cardSide=question`)
    }
    const text = cards[id][cardSide]
    const hint = cards[id].hint
    const templateData = {id, text}
//makes our link a href sidetoShow a clickable link to see answer and question
    if(cardSide==='question'){
        templateData.hint=hint
        templateData.sideToShow = 'answer'
    }else if(cardSide==='answer') {
        templateData.sideToShow = 'question'
    }
       

    res.render('cards', templateData)
})



module.exports= router