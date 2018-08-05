import { Component, OnInit } from '@angular/core';
import {Cinema} from '../../../../shared/model/cinema';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-cinema',
  templateUrl: './edit-cinema.component.html',
  styleUrls: ['./edit-cinema.component.css']
})
export class EditCinemaComponent implements OnInit {

  cinema: Cinema;

  constructor(private cinemaService: CinemaService, private location: Location, private route: ActivatedRoute) {
    this.cinema = new Cinema(null, null, null, null, null);
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
        this.cinemaService.getById(params['id']).subscribe( data => {
              this.cinema = data;
            });
      });
  }

  onSave() {
    this.cinemaService.update(this.cinema);
  }

  onCancel() {
    this.location.back();
  }
}
