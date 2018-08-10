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

  getPremieres(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + 'premieres');
  }

  getBillboard(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + 'billboard');
  }

  getById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + id);
  }

  save(movie: Movie): Observable<any> {
    return this.http.post<any>(this.baseUrl, movie);
  }

  update(movie: Movie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: movie
    };
    return this.http.put<any>(this.baseUrl, movie, httpOptions);
  }

  delete(movie: Movie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: movie
    };
    return this.http.delete(this.baseUrl, httpOptions);
  }
}
