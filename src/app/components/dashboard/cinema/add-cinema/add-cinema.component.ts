import { Component, OnInit } from '@angular/core';
import {Cinema} from '../../../../shared/model/cinema';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dashboard-add-cinema',
  templateUrl: './add-cinema.component.html',
  styleUrls: ['./add-cinema.component.css']
})
export class AddCinemaComponent implements OnInit {

  cinema: Cinema;

  constructor(private cinameService: CinemaService, private location: Location) {
    this.cinema = new Cinema(null, null, null, null, null);
  }

  ngOnInit() {
  }

  onSave() {
    this.cinameService.save(this.cinema);
  }

  onCancel() {
    this.location.back();
  }
}
