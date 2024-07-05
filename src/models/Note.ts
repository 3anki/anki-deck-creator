import {Card} from "./Card";

export class Note {
  public fields: string[];
  public cards: Card[] = [];

  constructor(fields: string[]) {
    this.fields = fields;
    this.cards = [];
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }
}
