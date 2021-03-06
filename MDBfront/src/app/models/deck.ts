import { User } from "./user";
import { Card } from "./card";

export class Deck {
    id: number;
    name: string;
    cards: Card[];
    owner: User;

    constructor (id: number, name: string, cards: Card[], user: User){
        this.id = id,
        this.name = name,
        this.cards = cards,
        this.owner = user
    }
}