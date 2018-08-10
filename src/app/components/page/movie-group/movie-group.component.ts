import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {MovieService} from '../../../shared/services/movie.service';
import {Movie} from '../../../shared/model/movie';
import {UploadServiceService} from '../../../shared/services/upload-service.service';
import * as $ from 'jquery';
declare var $: $;

@Component({
  selector: 'app-page-movie-group',
  templateUrl: './movie-group.component.html',
  styleUrls: ['./movie-group.component.css']
})
export class MovieGroupComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private uploadService: UploadServiceService) {
    this.movies = new Array();
  }

  ngOnInit() {
    this.movieService.getPremieres().subscribe( data => {
      this.movies = data;
    });
    $('#movie' + this.movies[0].id).addClass('active');
  }

  getMovieUrl(imagaName: string): string {
    return this.uploadService.getImageUrl(imagaName);
  }

  onNext() {
    $('#myCarousel').carousel('prev');
  }

  onBack() {
      $('#myCarousel').carousel('next');
  }
}
