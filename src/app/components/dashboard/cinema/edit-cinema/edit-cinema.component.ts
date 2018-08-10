import { Component, OnInit } from '@angular/core';
import {Cinema} from '../../../../shared/model/cinema';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-edit-cinema',
  templateUrl: './edit-cinema.component.html',
  styleUrls: ['./edit-cinema.component.css']
})
export class EditCinemaComponent implements OnInit {

  cinema: Cinema;

  constructor(private cinemaService: CinemaService, private location: Location, private route: ActivatedRoute, private mssage: MessageService) {
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
    this.cinemaService.update(this.cinema).subscribe(
      success => {
        this.mssage.successMessage('Cine actualizado sastifactoriamente. ');
      },
      error => {
        this.mssage.errorMessage('Error al actualizar cine. ' + error.toString());
      }
    );
  }

  onCancel() {
    this.location.back();
  }
}
