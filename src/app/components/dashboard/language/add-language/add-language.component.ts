import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../../shared/services/language.service';
import {Language} from '../../../../shared/model/language';

import * as $ from 'jquery';
import {Location} from '@angular/common';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  title: string;
  language: Language;

  constructor(private languageServie: LanguageService, private location: Location, private message: MessageService) { }

  ngOnInit() {
    this.title = 'Nuevo Idioma';
    this.language = new Language(null, null);
  }

  onSave(): void {
    this.languageServie.save(this.language).subscribe( success => {
      this.message.successMessage('Idioma guardado sastifactoriamente');
      this.language = new Language(null, null);
    },
      error => {
      this.message.errorMessage('Error al guardar Idioma ' + error.toString());
      });
  }

  onCancel() {
    this.location.back();
  }
}
