import { Deck } from "./deck";

export class Card {
    id: number;
    name: string;
    type: string;
    text: string;
    mana: string;
    power: number;
    toughness: number;
    decks: Deck;
    image: string;

    constructor(id:number, name:string, type: string, text: string, mana: string, power: number, toughness: number, decks: Deck){
        this.id=id,
        this.name=name,
        this.type=type,
        this.text=text,
        this.mana=mana,
        this.power=power,
        this.toughness=toughness,
        this.decks=decks
    }
}