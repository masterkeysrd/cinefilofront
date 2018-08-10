import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Genre} from '../../../../shared/model/genre';
import {GenreService} from '../../../../shared/services/genre.service';
import {Location} from '@angular/common';
import {MessageService} from '../../../../shared/services/message.service';

@Component({
  selector: 'app-dashboard-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  title: string;
  genre:  Genre;

  constructor(private genreService: GenreService, private location: Location, private messageService: MessageService) { }

  ngOnInit() {
    this.title = 'Crear Genero';
    this.genre = new Genre(null , null);
  }

  onSave(): void {
    this.genreService.save(this.genre).subscribe( success => {
      this.messageService.successMessage('Genero guardado sastifactoriamente');
      this.genre = new Genre(null, null);
    },
    error => {
      this.messageService.errorMessage('Error añadiendo el genero');
    });
  }

  onCancel() {
    this.location.back();
  }

}
