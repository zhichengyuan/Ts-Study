import { Color, Mark } from "./enums";
import { Deck, Joker, NormalCard } from "./types";

export function createDeck():Deck{
    const deck:Deck = [];
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
            deck.push(card)
        }
    }
    let joker:Joker = {
        type:"small",
        getString(){
            return 'jo'
        }
    }
    deck.push(joker)
    joker = {
        type:"big",
        getString(){
            return 'JO'
        }
    }
    deck.push(joker)
    return deck
}

export function printDeck(deck:Deck){
    let result = "\n";
    deck.forEach((card,i) => {
        
        result += card.getString() + "\t";
        if((i+1) % 6 === 0) {
            result += "\n"
        }
        
    })
    console.log(result);
}