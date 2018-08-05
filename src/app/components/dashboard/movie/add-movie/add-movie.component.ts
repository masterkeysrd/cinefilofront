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

  constructor(private movieSerive: MovieService, private genreService: GenreService, private languageService: LanguageService,
              private location: Location, private uploadService: UploadServiceService) { }

  ngOnInit() {
    this.posterImage = new PosterImage('Eligir Imagen', 0, 'assets/img/img-empty.png');
    this.movie = new Movie(null, null, null, null, null, null,  null, new Genre(null, null), new Language(null, null), null);
    this.genreService.getAll().subscribe(data => {
      this.genres = data;
    });
    this.languageService.getAll().subscribe( data => {
        this.languages = data;
      });
  }

  onSave(): void {
    if (this.imageChage) {
      this.uploadService.uploadImage(this.imageFile)
        .subscribe( data => {
          this.posterImage = data;
          this.movie.imageName = this.posterImage.name;
          this.movieSerive.save(this.movie);
        });
    } else {
      this.movieSerive.save(this.movie);
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
