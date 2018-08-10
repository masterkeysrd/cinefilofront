import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowService} from '../../../../shared/services/show.service';
import {Show} from '../../../../shared/model/show';
import {Room} from '../../../../shared/model/room';
import {Cinema} from '../../../../shared/model/cinema';
import {Movie} from '../../../../shared/model/movie';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {MovieService} from '../../../../shared/services/movie.service';
import {RoomService} from '../../../../shared/services/room.service';
import {MessageService} from '../../../../shared/services/message.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css']
})
export class EditShowComponent implements OnInit {

  show: Show;
  cimemas: Cinema[];
  movies: Movie[];
  rooms: Room[];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private showService: ShowService, private cinemaService: CinemaService,
              private movieService: MovieService, private roomService: RoomService, private message: MessageService,
              private location: Location) {
    this.show = new Show(null,
      new Room(null, null,
        new Cinema(null, null, null, null, null)),
      new Movie(null, null, null, null, null, null, null, null, null, null),
      null, null, null);
    this.isLoading = true;
  }

  onCinemaChange() {
    this.roomService.getAll().subscribe(rooms => {
      this.rooms = rooms.filter(x => x.cinema.id === this.show.room.cinema.id);
    });
  }

  ngOnInit() {
    this.cinemaService.getAll().subscribe( cinemas => {
      this.cimemas = cinemas;
    });
    this.movieService.getAll().subscribe( data => {
      this.movies = data;
    });
    this.route.params.subscribe( params => {
      this.showService.getById(params['id']).subscribe( data => {
          this.show = data;
          this.isLoading = false;
        this.onCinemaChange();
      });
    });
  }

  onSave() {
    this.showService.update(this.show).subscribe(
      success => {
        this.message.successMessage('Funcion actualizada sastifactoriamente');
      },
      error => {
        this.message.errorMessage('Error al actualizar funcion.' + error.toString());
      });
  }

  onCancel() {
    this.location.back();
  }

}
