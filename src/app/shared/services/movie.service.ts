import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/movie/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getById(id: number): Observable<Movie> {
    console.log(this.baseUrl + id);
    this.http.get<Movie>(this.baseUrl + id).subscribe(data => {
      console.log(data);
    });
    return this.http.get<Movie>(this.baseUrl + id);
  }

  save(movie: Movie): void {
    this.http.post(this.baseUrl, movie)
      .subscribe(
        res => {
          console.log('Movie Save Done');
        },
        error => {
          console.log('Error Saving Movie');
          console.log(movie);
          console.log(movie.language);
          console.log(movie.genre);
        }
      );
  }

  update(movie: Movie): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: movie
    };
    this.http.put(this.baseUrl, movie, httpOptions)
      .subscribe(
        res => {
          console.log('Movie Update Done');
        },
        error => {
          console.log('Error Updating Movie');
          console.log(movie);
          console.log(movie.language);
          console.log(movie.genre);
        } );
  }

  delete(movie: Movie) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: movie
    };
    this.http.delete(this.baseUrl, httpOptions)
      .subscribe( res => {
          console.log('Movie Delete Done');
        },
        error => {
          console.log('Error Deleting Movie');
        });
  }
}
