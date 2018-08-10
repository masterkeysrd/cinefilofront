import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../../shared/model/movie';
import {MovieService} from '../../../../shared/services/movie.service';
import {Genre} from '../../../../shared/model/genre';
import {LanguageService} from '../../../../shared/services/language.service';
import {Language} from '../../../../shared/model/language';
import {GenreService} from '../../../../shared/services/genre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {PosterImage} from '../../../../shared/model/poster-image';
import {UploadServiceService} from '../../../../shared/services/upload-service.service';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  title = 'Crear Pelicula';
  movie: Movie;
  genres: Genre[];
  languages: Language[];
  imageFile: File;
  posterImage: PosterImage;
  imageChage: boolean;
  isLoading: boolean;

  constructor(private movieService: MovieService, private genreService: GenreService, private languageService: LanguageService,
              private location: Location, private uploadService: UploadServiceService, private message: MessageService) { }

  ngOnInit() {
    this.posterImage = new PosterImage('Eligir Imagen', 0, 'assets/img/img-empty.png');
    this.movie = new Movie(null, null, null, null, null, null,  null, new Genre(null, null), new Language(null, null), null);
    this.genreService.getAll().subscribe(
      data => {
        this.genres = data;
    },
      error => {
        this.message.errorMessage('Error obteniendo generos. ' + error.toString());
      });
    this.languageService.getAll().subscribe(
      data => {
        this.languages = data;
      },
      error => {
        this.message.errorMessage('Error obteniendo idiomas. ' + error.toString());
      });
  }

  onSave(): void {
    if (this.imageChage) {
      this.uploadService.uploadImage(this.imageFile)
        .subscribe( data => {
          this.posterImage = data;
          this.movie.imageName = this.posterImage.name;
          this.movieService.save(this.movie).subscribe(
            sucess => {
              this.message.successMessage('Pelicula guardada sastifactoriamente');
              this.posterImage = new PosterImage('Eligir Imagen', 0, 'assets/img/img-empty.png');
              this.movie = new Movie(null, null, null, null, null, null,  null, new Genre(null, null), new Language(null, null), null);
            },
            error => {
              this.message.errorMessage('Error al guardar pelicula.' + error.toString());
            }
          );
            this.message.successMessage('Pelicula guardada sastifactoriamente');
        },
          error => {
          this.message.errorMessage('Error subiendo imagen. ' + error.toString());
          });
    } else {
      this.movieService.save(this.movie).subscribe(
        success => {
          this.message.successMessage('Pelicula guardad sastifactoriamente');
          this.posterImage = new PosterImage('Eligir Imagen', 0, 'assets/img/img-empty.png');
          this.movie = new Movie(null, null, null, null, null, null,  null, new Genre(null, null), new Language(null, null), null);
        });
    }
  }

  onCancel(): void {
    this.location.back();
  }

  onFileChange(event: any) {
    this.imageChage = true;
    this.imageFile = event.target.files[0];
  }
}
