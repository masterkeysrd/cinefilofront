import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../shared/model/movie';
import {MovieService} from '../../../shared/services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {UploadServiceService} from '../../../shared/services/upload-service.service';
import {Genre} from '../../../shared/model/genre';
import {Language} from '../../../shared/model/language';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  urlImage: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private uploadService: UploadServiceService) {
  }

  ngOnInit() {
    this.movie = new Movie(null, null, null, null, null, null,
      null, new Genre(null, null), new Language(null, null), null);
    this.urlImage = 'assets/img/img-empty.png'
    this.route.params.subscribe(params => {
      this.movieService.getById(params['id']).subscribe(data => {
        this.movie = data;
        if (this.movie.imageName != null) {
          this.urlImage = this.uploadService.getImageUrl(this.movie.imageName);
        }
      });
    });
  }
}
