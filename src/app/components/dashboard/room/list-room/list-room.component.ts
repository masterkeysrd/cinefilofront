import { Component, OnInit } from '@angular/core';
import {Room} from '../../../../shared/model/room';
import {RoomService} from '../../../../shared/services/room.service';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  title = 'Salas';
  rooms: Room[];
  isLoading: boolean;

  constructor(private roomService: RoomService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.roomService.getAll().subscribe( data => {
      this.rooms = data;
      this.isLoading = false;
      });
  }

  onDelete(data: Room) {
    this.roomService.delete(data);
  }

}
