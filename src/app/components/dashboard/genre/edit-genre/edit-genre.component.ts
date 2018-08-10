import { Component, OnInit } from '@angular/core';
import {Genre} from '../../../../shared/model/genre';
import {GenreService} from '../../../../shared/services/genre.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import {Location} from '@angular/common';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  title: string;
  genre: Genre;
  constructor(private genreSerive: GenreService, private route: ActivatedRoute, private location: Location,
              private message: MessageService) {
    this.genre = new Genre(0, null);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.genreSerive.getById(params['id'])
        .subscribe(data => {
          this.genre = data;
        },
          error => {
            this.message.errorMessage('Error obteniendo genero.');
          });
    });
  }

  onSave() {
    this.genreSerive.update(this.genre).subscribe( success => {
        this.message.successMessage('Genero actualizado sastifactoriamente.');
    },
      error => {
        this.message.errorMessage('Error actualizando genero.');
      });
  }

  onCancel() {
    this.location.back();
  }
}
