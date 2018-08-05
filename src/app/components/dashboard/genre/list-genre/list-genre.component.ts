import { Component, OnInit } from '@angular/core';
import {Genre} from '../../../../shared/model/genre';
import {Observable} from 'rxjs';
import {GenreService} from '../../../../shared/services/genre.service';

@Component({
  selector: 'app-dashboard-list-genre',
  templateUrl: './list-genre.component.html',
  styleUrls: ['./list-genre.component.css']
})
export class ListGenreComponent implements OnInit {

  title: string;
  genres: Genre[];
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.title = 'Generos';
    this.genreService.getAll().subscribe(data => {
      this.genres = data;
    });
  }

  onDelete(genre: Genre) {
    this.genreService.delete(genre);
    this.genres.splice(this.genres.indexOf(genre), 1);
  }
}
