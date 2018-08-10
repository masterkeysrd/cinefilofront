import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../../../shared/services/language.service';
import {Language} from '../../../../shared/model/language';
import * as $ from 'jquery';
import {Location} from '@angular/common';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.css']
})
export class EditLanguageComponent implements OnInit {

  title: string;
  language: Language;

  constructor(private route: ActivatedRoute, private languageService: LanguageService, private location: Location,
              private message: MessageService) {
    this.language = new Language(null, null);
  }

  ngOnInit() {
    this.title = 'Editar Idioma';
    this.route.params.subscribe(
      params => {
        this.languageService.getById(params['id']).subscribe(
          data => {
            this.language = data;
          },
          error => {
            this.message.errorMessage('Error obteniendo lenguaje. ' + error.toString());
          }
        );
      },
      error => {
        this.message.errorMessage('Error al obtener parametros');
      });
  }

  onSave() {
    this.languageService.update(this.language).subscribe(
      success => {
      this.message.successMessage('Lenguaje actualizado sastifactorimente. ');
    },
      error => {
        this.message.errorMessage('Error actualizando lenguaje. ' + error.toString());
      });
  }

  onDelete() {
    this.location.back();
  }
}
