import { Deck } from "./deck";

export class Card {
    id: number;
    type: string;
    text: string;
    mana: string;
    power: number;
    toughness: number;
    decks: Deck;
}