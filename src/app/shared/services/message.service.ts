import { Injectable } from '@angular/core';
import * as $ from 'jquery';
declare var $: $;


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  successMessage(message: String): void {
    $.notify({
      icon: 'fa fa-check',
      title: 'Info:',
      message: message
    }, {
      // settings
      type: 'success',
      position: 'fixed',
      delay: '1000',
      placement : {
        from: 'bottom'
      }});
  }

  errorMessage(message: String): void {
    $.notify({
      icon: 'fa fa-times',
      title: 'Error: ',
      message: message
    }, {
      // settings
      type: 'danger',
      position: 'fixed',
      delay: '1000',
      placement : {
        from: 'bottom'
      }});
  }
}
