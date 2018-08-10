import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../../shared/services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../../shared/model/movie';
import {Genre} from '../../../../shared/model/genre';
import {Language} from '../../../../shared/model/language';
import {UploadServiceService} from '../../../../shared/services/upload-service.service';
import {Location} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  movie: Movie;
  urlImage: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private uploadSerive: UploadServiceService,
              private location: Location, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.movie = new Movie(null, null, null, null, null, null,
      null, new Genre(null, null), new Language(null, null), null, null);
    this.urlImage = 'assets/img/img-empty.png'
    this.route.params.subscribe( params => {
      this.movieService.getById(params['id']).subscribe( data => {
        this.movie = data;
        if (this.movie.imageName != null) {
          this.urlImage = this.uploadSerive.getImageUrl(this.movie.imageName);
        }
      });
      });
  }

  onBack() {
    this.location.back();
  }

  trailerURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl.replace('watch?v=', 'embed/'));
  }
}
