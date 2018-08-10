import { Component, OnInit } from '@angular/core';
import {Genre} from '../../../../shared/model/genre';
import {Observable} from 'rxjs';
import {GenreService} from '../../../../shared/services/genre.service';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-dashboard-list-genre',
  templateUrl: './list-genre.component.html',
  styleUrls: ['./list-genre.component.css']
})
export class ListGenreComponent implements OnInit {

  title = 'Generos';
  genres: Genre[];
  selectedGenre: Genre;
  isLoading: boolean;

  constructor(private genreService: GenreService, private message: MessageService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.genreService.getAll().subscribe(data => {
      this.genres = data;
      this.isLoading = false;
    },
      error => {
      this.message.errorMessage('Error obteniendo generos. ' + error.toString());
      });
  }

  onSelect(selected: Genre) {
    this.selectedGenre = selected;
  }

  onDelete(genre: Genre) {
    this.genreService.delete(genre).subscribe( success => {
      this.genres.splice(this.genres.indexOf(genre), 1);
      this.message.successMessage('Genero borrado sastifactoriamente.');
    },
      error => {
        this.message.errorMessage('Error al borrar el genero. ' + error.toString());
      });
  }
}
