import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CineFilo';
  router: string;

  constructor(private location: Location) {
    this.router = this.location.path();
  }

  ngOnInit(): void {
  }
}
