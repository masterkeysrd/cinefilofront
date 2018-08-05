import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../../shared/model/movie';
import {Genre} from '../../../../shared/model/genre';
import {Language} from '../../../../shared/model/language';
import {MovieService} from '../../../../shared/services/movie.service';
import {GenreService} from '../../../../shared/services/genre.service';
import {LanguageService} from '../../../../shared/services/language.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {PosterImage} from '../../../../shared/model/poster-image';
import {UploadServiceService} from '../../../../shared/services/upload-service.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  title = 'Crear Pelicula';
  movie: Movie;
  genres: Genre[];
  languages: Language[];
  imageFile: File;
  posterImage: PosterImage;
  imageChage: boolean;
  isLoading: boolean;

  constructor(private movieService: MovieService, private genreService: GenreService, private languageService: LanguageService,
              private location: Location, private route: ActivatedRoute, private uploadService: UploadServiceService) {
    this.isLoading = true;
    this.posterImage = new PosterImage('Eligir Imagen', 0, 'assets/img/img-empty.png');
    this.movie = new Movie(null, null, null, null, null, null,  null, new Genre(null, null),
      new Language(null, null), null);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getById(params['id']).subscribe( data => {
          this.movie = data;
          if (this.movie.imageName !== null) {
            this.posterImage = new PosterImage(this.movie.imageName, null, this.uploadService.getImageUrl(this.movie.imageName));
          }
        this.genreService.getAll().subscribe(genre => {
          this.genres = genre;
        });
        this.languageService.getAll().subscribe( language => {
          this.languages = language;
        });
          this.isLoading = false;
        }
      );
    });
  }

  onSave() {
    if (this.imageChage) {
      this.uploadService.uploadImage(this.imageFile)
        .subscribe( data => {
          this.posterImage = data;
          this.movie.imageName = this.posterImage.name;
          this.movieService.update(this.movie);
        });
    } else {
      this.movieService.update(this.movie);
    }
  }
  onCancel() {
    this.location.back();
  }

  onFileChange(event: any) {
    this.imageChage = true;
    this.imageFile = event.target.files[0];
  }

  byId(item1: any, item2: any) {
    return item1.id === item2.id;
  }

}
