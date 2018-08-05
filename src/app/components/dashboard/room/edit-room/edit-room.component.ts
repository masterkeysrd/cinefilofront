import { Component, OnInit } from '@angular/core';
import {Room} from '../../../../shared/model/room';
import {Cinema} from '../../../../shared/model/cinema';
import {RoomService} from '../../../../shared/services/room.service';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  room: Room;
  cinemas: Cinema[];

  constructor(private roomService: RoomService, private cinemaService: CinemaService, private location: Location,
              private route: ActivatedRoute) {
    this.room = new Room(null, null, new Cinema(null, null, null, null, null));
  }

  ngOnInit() {
    this.cinemaService.getAll().subscribe( data => {
      this.cinemas = data;
    });

    this.route.params.subscribe(param => {
      this.roomService.getById(param['id']).subscribe( data => {
        this.room = data;
      });
    });
  }

  onSave() {
    this.roomService.update(this.room).subscribe();
  }

  onCancel() {
    this.location.back();
  }

}
