import { Media } from './Media';
import { Note } from './Note';

export class Deck {
  private _name: string;
  private _notes: Note[] = [];
  private _media: Media[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public addNote(note: Note): void {
    this._notes.push(note);
  }

  public addMedia(media: Media): void {
    this._media.push(media);
  }

  public exportToAPKG(): void {
    // TODO: Implement
  }
}
