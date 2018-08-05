import {Cinema} from './cinema';

export class Room {
  id: number;
  name: string;
  cinema: Cinema;


  constructor(id: number, description: string, cinema: Cinema) {
    this.id = id;
    this.name = description;
    this.cinema = cinema;
  }
}
