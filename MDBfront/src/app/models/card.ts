import { Deck } from "./deck";

export class Card {
    public id: number;
    public name: string;
    public type: string;
    public text: string;
    public mana: string;
    public power: number;
    public toughness: number;
    public deck: Deck

    constructor (id: number, name: string, type: string, text: string, mana: string, power: number, toughness: number, decks: number) {
        this.id =  id,
        this.name = name,
        this.type = type,
        this.text = text, 
        this.mana = mana,
        this.power = power,
        this.toughness = toughness,
        this.deck = {} as Deck
    }
}