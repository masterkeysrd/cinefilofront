import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-option-header',
  templateUrl: './option-header.component.html',
  styleUrls: ['./option-header.component.css']
})
export class OptionHeaderComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
