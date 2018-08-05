import {Room} from './room';
import {Movie} from './movie';
import {Time} from '@angular/common';

export class Show {
  id: number;
  room: Room;
  movie: Movie;
  datefrom: Date;
  dateto: Date;
  startHour: Time;


  constructor(id: number, room: Room, movie: Movie, datefrom: Date, dateto: Date, startHour: Time) {
    this.id = id;
    this.room = room;
    this.movie = movie;
    this.datefrom = datefrom;
    this.dateto = dateto;
    this.startHour = startHour;
  }
}
