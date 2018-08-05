import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-erase',
  templateUrl: './button-erase.component.html',
  styleUrls: ['./button-erase.component.css']
})
export class ButtonEraseComponent implements OnInit {

  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
