import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../shared/model/movie';
import {UploadServiceService} from '../../../shared/services/upload-service.service';

@Component({
  selector: 'app-page-movie-tail',
  templateUrl: './movie-tail.component.html',
  styleUrls: ['./movie-tail.component.css']
})
export class MovieTailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private uploadService: UploadServiceService) { }

  ngOnInit() {
  }

  getMovieUrl(imagaName: string): string {
    return this.uploadService.getImageUrl(imagaName);
  }

}
