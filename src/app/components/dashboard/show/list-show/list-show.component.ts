import { Component, OnInit } from '@angular/core';
import {Show} from '../../../../shared/model/show';
import {ShowService} from '../../../../shared/services/show.service';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.css']
})
export class ListShowComponent implements OnInit {

  shows: Show[];
  selectedShow: Show;
  isLoading: boolean;

  constructor(private showsService: ShowService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.showsService.getAll().subscribe( data => {
      this.shows = data;
      this.isLoading = false;
    });
  }

  onSelect(show: Show) {
    this.selectedShow = show;
  }

  onDelete(show: Show) {
    this.showsService.delete(show).subscribe();
    this.shows.splice(this.shows.indexOf(show), 1);
  }

}
