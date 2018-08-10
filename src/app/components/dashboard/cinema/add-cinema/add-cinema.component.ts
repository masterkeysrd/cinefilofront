import { Component, OnInit } from '@angular/core';
import {Cinema} from '../../../../shared/model/cinema';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {Location} from '@angular/common';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-dashboard-add-cinema',
  templateUrl: './add-cinema.component.html',
  styleUrls: ['./add-cinema.component.css']
})
export class AddCinemaComponent implements OnInit {

  cinema: Cinema;

  constructor(private cinameService: CinemaService, private location: Location, private message: MessageService) {
    this.cinema = new Cinema(null, null, null, null, null);
  }

  ngOnInit() {
  }

  onSave() {
    this.cinameService.save(this.cinema).subscribe(
      success => {
        this.message.successMessage('Cine guardando sastifactoriamente');
        this.cinema = new Cinema(null, null, null, null, null);
      },
      error => {
        this.message.errorMessage('Error guardando cine' + error.toString());
      }
    );
  }

  onCancel() {
    this.location.back();
  }
}
