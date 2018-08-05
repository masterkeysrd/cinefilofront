import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genre} from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/genre/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl);
  }

  getById(id: number): Observable<Genre> {
    console.log(this.baseUrl + id);
    this.http.get<Genre>(this.baseUrl + id).subscribe(data => {
      console.log(data);
    });
    return this.http.get<Genre>(this.baseUrl + id);
  }

  save(genre: Genre): void {
    this.http.post(this.baseUrl, genre)
      .subscribe(
        res => {
          console.log('Genre Save Done');
        },
        error => {
          console.log('Error Saving Error');
        }
      );
  }

  update(genre: Genre): void {
    this.http.put(this.baseUrl, genre)
      .subscribe(
        res => {
        console.log('Genre Update Done');
      },
          error => {
          console.log('Error Updating Genre');
          } );
  }

  delete(genre: Genre) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: genre
    };
    this.http.delete(this.baseUrl, httpOptions)
      .subscribe( res => {
        console.log('Genre Delete Done');
      },
        error => {
        console.log('Error Deleting Genre');
        });
  }
}
