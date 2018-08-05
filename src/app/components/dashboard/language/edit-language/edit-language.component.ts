import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../../../shared/services/language.service';
import {Language} from '../../../../shared/model/language';
import * as $ from 'jquery';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.css']
})
export class EditLanguageComponent implements OnInit {

  title: string;
  language: Language;

  constructor(private route: ActivatedRoute, private languageService: LanguageService, private location: Location) {
    this.language = new Language(null, null);
  }

  ngOnInit() {
    this.title = 'Editar Idioma';
    this.route.params.subscribe(
      params => {
        this.languageService.getById(params['id']).subscribe(
          data => {
            this.language = data;
          }
        );
      }
    );
  }

  onSave() {
    this.languageService.update(this.language);
    $('.alert').fadeTo(2000, 500).slideUp(500, function() {
      $('.alert').slideUp(500);
    });
  }

  onDelete() {
    this.location.back();
  }
}
