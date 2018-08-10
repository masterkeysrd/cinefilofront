import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {LocalStorageServiceService} from '../../shared/services/local-storage-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private localStorageService: LocalStorageServiceService) { }

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
    this.router.navigateByUrl('/index');
  }
}
