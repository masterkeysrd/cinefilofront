import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PosterImage} from '../model/poster-image';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/image/upload/poster-image'

  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<PosterImage> {
    let formdata: FormData = new FormData();
    formdata.append('image', file);
    return this.http.post<PosterImage>(this.baseUrl, formdata);
  }
  getImageUrl(name: string): string {
    return this.baseUrl + '/' + name;
  }
}
