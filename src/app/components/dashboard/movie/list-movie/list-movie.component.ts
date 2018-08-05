import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../../shared/model/movie';
import {MovieService} from '../../../../shared/services/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  title = 'Peliculas';
  movies: Movie[];
  isLoading: boolean;

  constructor(private movieService: MovieService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.movieService.getAll().subscribe(data => {
      this.movies = data;
      this.isLoading = false;
    });
  }

  onDelete(movie: Movie): void {
    return;
  }

}
