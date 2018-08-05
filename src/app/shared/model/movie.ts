import {Genre} from './genre';
import {Language} from './language';

export class Movie {
  id: number;
  name: number;
  calification: number;
  director: number;
  premiereDate: Date;
  mainActors: string;
  synopsis: string;
  genre: Genre;
  language: Language;
  imageName: string;

  constructor(id: number, title: number, calification: string, director: number,
              premiereDate: Date, mainActors: string, synopsis: string, genre: Genre, language: Language, imageName: string) {
    this.id = id;
    this.name = title;
    this.calification = director;
    this.premiereDate = premiereDate;
    this.mainActors = synopsis;
    this.synopsis = synopsis;
    this.director = director;
    this.genre = genre;
    this.language = language;
    this.imageName = imageName;
  }
}
