import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../../shared/services/language.service';
import {Language} from '../../../../shared/model/language';

@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {

  languages: Language[];
  title: string;
  isLoading: boolean;

  constructor(private languageService: LanguageService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.title = 'Idiomas';
    this.languageService.getAll().subscribe(data => {
      this.languages = data;
      this.isLoading = false;
    });
  }

  onDelete(language: Language) {
    this.languageService.delete(language);
    this.languages.splice(this.languages.indexOf(language), 1);
  }
}
