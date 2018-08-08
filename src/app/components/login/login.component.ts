import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {LocalStorageServiceService} from '../../shared/services/local-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location, private localStorageService: LocalStorageServiceService) { }

  ngOnInit() {
  }

  onSing() {
    const session = {
      user: 'dmorales',
      role: 'admin'
    }

    this.localStorageService.storeOnLocalStorage(session);
  }

  onCancel() {
    this.location.go('/index');
  }

}
