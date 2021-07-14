import { Mark, Color } from "./enums";
import { Card, Joker, NormalCard } from "./types";

interface PublishResult{
    player1:Deck,
    player2:Deck,
    player3:Deck,
    left:Deck
}

export class Deck{
    private _cards:Card[] = []
    constructor(cards?:Card[]){
        if(cards) {
            this._cards = cards
        }else {
            this.init();
        }
        
    }
    private init(){
        const marks = Object.values(Mark);
        const colors = Object.values(Color);
        for(const m of marks) {
            for(const c of colors) {
                const card:NormalCard = {
                    mark:m,
                    color:c,
                    getString(){
                        return this.color + this.mark
                    }
                }
                this._cards.push(card)
            }
        }
        let joker:Joker = {
            type:"small",
            getString(){
                return 'jo'
            }
        }
        this._cards.push(joker)
        joker = {
            type:"big",
            getString(){
                return 'JO'
            }
        }
        this._cards.push(joker)
    }
    print(){
        let result = "\n";
        this._cards.forEach((card,i) => {
            
            result += card.getString() + "\t";
            if((i+1) % 6 === 0) {
                result += "\n"
            }
            
        })
        console.log(result);
    }
    /**
     * 洗牌
     */
    shuffle(){
        this._cards.forEach((e,i) => {
            const targetIndex = this.getRadom(0,this._cards.length);
            const temp = this._cards[i];
            this._cards[i] = this._cards[targetIndex];
            this._cards[targetIndex] = temp
        })
    }

    //发完牌后，得到的结果有4个card[]
    publish():PublishResult{
        let player1:Deck,player2:Deck,player3:Deck,left:Deck;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this._cards);
        return {player1,player2,player3,left}
    }

    private takeCards(n:number):Deck{
        const cards:Card[] = [];
        for(let i = 0;i < n;i++) {
            cards.push(this._cards.shift() as Card);
        }
        return new Deck(cards)
    }

    /**
     * 无法取到最大值
     * @param min 
     * @param max 
     */
    private getRadom(min:number,max:number) {
        const dec = max -min;
        return Math.floor(Math.random() * dec + min);
    }

    
}