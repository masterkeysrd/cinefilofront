import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../../../shared/services/cinema.service';
import {Cinema} from '../../../shared/model/cinema';
import {ShowService} from '../../../shared/services/show.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  cinemas: any[];

  constructor(private cinemaService: CinemaService, private showService: ShowService) { }

  ngOnInit() {
    this.cinemaService.getAll().subscribe(
      data => {
        this.cinemas = data;
      });
  }

  getShows(c: Cinema) {
    this.showService.getByCinema(c.id).subscribe(
      data => {
        c.shows = data;
      });
  }

}
