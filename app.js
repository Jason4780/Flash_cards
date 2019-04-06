class Game{

}//end game

class Player{
    constructor(playerNumber, tokenCount, tokenColor, active=false){
        this.playerNumber = playerNumber
        this.tokenCount = tokenCount
        this.tokenColor = tokenColor
        this.active = active
        this.tokens = [createTokens(21)]
    }
    //creates tokens
    function createTokens(num){
        let array = []
        for(let i=0; i<num; i+=1){
            const token = new Token(i, this)
        }
        return array = []
    }
}//end player

class Board{

}//end board

class Space{
    
}//end space

class Token{
    constructor(){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

}//end token



