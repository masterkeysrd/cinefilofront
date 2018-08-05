import { Component, OnInit } from '@angular/core';
import {Room} from '../../../../shared/model/room';
import {Cinema} from '../../../../shared/model/cinema';
import {RoomService} from '../../../../shared/services/room.service';
import {CinemaService} from '../../../../shared/services/cinema.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  room: Room;
  cinemas: Cinema[];

  constructor(private roomService: RoomService, private cinemaService: CinemaService, private location: Location) {
    this.room = new Room(null, null, new Cinema(null, null, null, null, null));
  }

  ngOnInit() {
    this.cinemaService.getAll().subscribe( data => {
      this.cinemas = data;
    });
  }

  onSave() {
    this.roomService.save(this.room).subscribe();
  }

  onCancel() {
    this.location.back();
  }

}
