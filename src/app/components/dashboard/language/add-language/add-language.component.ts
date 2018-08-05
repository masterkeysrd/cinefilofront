import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../../shared/services/language.service';
import {Language} from '../../../../shared/model/language';

import * as $ from 'jquery';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  title: string;
  language: Language;

  constructor(private languageServie: LanguageService, private location: Location) { }

  ngOnInit() {
    this.title = 'Nuevo Idioma';
    this.language = new Language(null, null);
  }

  onSave(): void {
    this.languageServie.save(this.language);
    $('.alert').fadeTo(2000, 500).slideUp(500, function() {
      $('.alert').slideUp(500);
    });
  }

  onCancel() {
    this.location.back();
  }
}
