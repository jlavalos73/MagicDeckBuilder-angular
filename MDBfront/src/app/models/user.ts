import { Deck } from './deck';

export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    decks: Deck[];
}