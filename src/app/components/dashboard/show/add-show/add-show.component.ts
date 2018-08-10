import { Component, OnInit } from '@angular/core';
import {Show} from '../../../../shared/model/show';
import {ShowService} from '../../../../shared/services/show.service';
import {MovieService} from '../../../../shared/services/movie.service';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {RoomService} from '../../../../shared/services/room.service';
import {Movie} from '../../../../shared/model/movie';
import {Cinema} from '../../../../shared/model/cinema';
import {Room} from '../../../../shared/model/room';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  show: Show;
  movies: Movie[];
  cimemas: Cinema[];
  rooms: Room[];
  isLoading: boolean;


  constructor(private showService: ShowService, private movieService: MovieService, private cinemaService: CinemaService,
              private roomService: RoomService) {
    this.show = new Show(null,
                          new Room(null, null,
                            new Cinema(null, null, null, null, null)),
                              new Movie(null, null, null, null, null, null, null, null, null, null, null),
      null, null, null);
    this.isLoading = true;
  }

  ngOnInit() {
    this.cinemaService.getAll().subscribe( cinemas => {
        this.cimemas = cinemas;
    });
    this.movieService.getAll().subscribe( data => {
        this.movies = data;
      });
  }

  onCinemaChange() {
    this.roomService.getAll().subscribe(rooms => {
      this.rooms = rooms.filter(x => x.cinema.id === this.show.room.cinema.id);
    });
  }

  onSave() {
    this.showService.save(this.show).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error);
        console.log(this.show);
      }
    );
  }

  onCancel() {

  }
}
