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
  selectedRoom: Room;
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

  onSelect(selected: Room) {
    this.selectedRoom = selected;
  }

  onDelete(data: Room) {
    this.roomService.delete(data).subscribe( success => {
      this.rooms.splice(this.rooms.indexOf(data), 1);
    });
  }

}
