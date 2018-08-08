import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../shared/model/movie';
import {MovieService} from '../../../shared/services/movie.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit {

  billboard: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getBillboard().subscribe( data => {
      this.billboard = data;
    });
  }

}
