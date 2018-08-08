import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../shared/model/movie';
import {MovieService} from '../../../shared/services/movie.service';
import {UploadServiceService} from '../../../shared/services/upload-service.service';

@Component({
  selector: 'app-premiere',
  templateUrl: './premiere.component.html',
  styleUrls: ['./premiere.component.css']
})
export class PremiereComponent implements OnInit {

  primeres: Movie[];

  constructor(private movieService: MovieService, private uploadService: UploadServiceService) { }

  ngOnInit() {
    this.movieService.getPremieres().subscribe( data => {
      this.primeres = data;
    });
  }

  getMovieUrl(imagaName: string): string {
    return this.uploadService.getImageUrl(imagaName);
  }

}
