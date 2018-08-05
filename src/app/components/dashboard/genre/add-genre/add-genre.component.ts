import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Genre} from '../../../../shared/model/genre';
import {GenreService} from '../../../../shared/services/genre.service';
import * as $ from 'jquery';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dashboard-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  title: string;
  genre:  Genre;

  constructor(private genreService: GenreService, private location: Location) { }

  ngOnInit() {
    this.title = 'Crear Genero';
    this.genre = new Genre(null , null);
  }

  onSave(): void {
    this.genreService.save(this.genre);
    $('.alert').fadeTo(2000, 500).slideUp(500, function() {
      $('.alert').slideUp(500);
    });
  }

  onCancel() {
    this.location.back();
  }

}
