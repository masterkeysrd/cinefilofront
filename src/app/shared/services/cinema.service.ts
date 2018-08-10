import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genre} from '../model/genre';
import {Cinema} from '../model/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/cinema/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.baseUrl);
  }

  getById(id: number): Observable<Cinema> {
    return this.http.get<Cinema>(this.baseUrl + id);
  }

  getWithShows(movie: number, date: Date): Observable<Cinema[]> {
    let params = new HttpParams();
    params = params.append('movie', movie.toString());
    params = params.append('date', date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());

    return this.http.get<Cinema[]>(this.baseUrl + '/shows', {params : params});
  }

  save(cinema: Cinema): Observable<any> {
    return this.http.post(this.baseUrl, cinema);
  }

  update(cinema: Cinema): Observable<any>  {
    return this.http.put<any>(this.baseUrl, cinema);
  }

  delete(cinema: Cinema): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: cinema
    };
    return this.http.delete<any>(this.baseUrl, httpOptions);
  }
}
