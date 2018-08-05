import { Component, OnInit } from '@angular/core';
import {Genre} from '../../../../shared/model/genre';
import {GenreService} from '../../../../shared/services/genre.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  title: string;
  genre: Genre;
  constructor(private genreSerive: GenreService, private route: ActivatedRoute, private location: Location) {
    this.genre = new Genre(0, null);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.genreSerive.getById(params['id'])
        .subscribe(data => {
          this.genre = data;
        });
    });
  }

  onSave() {
    this.genreSerive.update(this.genre);
    $('.alert').fadeTo(2000, 500).slideUp(500, function() {
      $('.alert').slideUp(500);
    });
  }

  onCancel() {
    this.location.back();
  }
}
