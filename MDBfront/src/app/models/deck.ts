import { User } from "./user";
import { Card } from "./card";

export class Deck {
    id: number;
    name: string;
    cards: Card[];
    user: User;

}