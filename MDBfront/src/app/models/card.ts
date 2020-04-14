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
}