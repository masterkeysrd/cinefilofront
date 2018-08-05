import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {Cinema} from '../../../../shared/model/cinema';

@Component({
  selector: 'app-dashboard-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {

  cinemas: Cinema[];
  isLoading: boolean;

  constructor(private cinemaService: CinemaService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.cinemaService.getAll().subscribe(
      data => {
        this.cinemas = data;
        this.isLoading = false;
      });
  }

  onDelete(cinema: Cinema) {
    this.cinemaService.delete(cinema);
    this.cinemas.splice(this.cinemas.indexOf(cinema), 1);
  }
}
