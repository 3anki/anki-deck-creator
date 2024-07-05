import { Media } from "./Media";
import { Note } from "./Note";

class Deck {
  public name: string;
  public notes: Note[] = [];
  public media: Media[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addNote(note: Note): void {
    this.notes.push(note);
  }

  public addMedia(media: Media): void {
    this.media.push(media);
  }
}
