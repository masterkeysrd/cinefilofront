import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../../shared/services/language.service';
import {Language} from '../../../../shared/model/language';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {

  title = 'Idiomas';
  languages: Language[];
  seletedLanguage: Language;
  isLoading: boolean;

  constructor(private languageService: LanguageService, private message: MessageService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.languageService.getAll().subscribe(data => {
      this.languages = data;
      this.isLoading = false;
    }, error => {
      this.message.errorMessage('Error obteniendo lenguajes. ' + error.toString());
    });
  }

  onSelect(language: Language) {
    this.seletedLanguage = language;
  }

  onDelete(language: Language) {
    this.languageService.delete(language).subscribe(suucess => {
      this.languages.splice(this.languages.indexOf(language), 1);
      this.message.successMessage('Idioma borrado sastifactoriamente');
    },
      error => {
      this.message.errorMessage('Error al borrar el idioma. ' + error.toString());
      });
  }
}
