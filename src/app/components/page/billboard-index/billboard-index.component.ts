import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../shared/services/movie.service';
import {Movie} from '../../../shared/model/movie';

@Component({
  selector: 'app-page-billboard-index',
  templateUrl: './billboard-index.component.html',
  styleUrls: ['./billboard-index.component.css']
})
export class BillboardIndexComponent implements OnInit {

  billboard: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getBillboard().subscribe( data => {
      this.billboard = data;
      });
  }

}
