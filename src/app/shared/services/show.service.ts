import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../model/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/show/';

  constructor(private http: HttpClient) { }


  getByMovieandCinema(movie: number, cinema: number, date: Date): Observable<Show[]> {
    let params = new HttpParams();
    params = params.append('movie', movie.toString());
    params = params.append('cinema', cinema.toString())
    params = params.append('date', date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());
    console.log(date.getDay() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());
    return this.http.get<Show[]>(this.baseUrl, {params: params});
  }

  getByMovie(movie: number): Observable<Show[]> {
    return this.http.get<Show[]>(this.baseUrl, {params: new HttpParams().set('movie', movie.toString())});
  }

  getAll(): Observable<Show[]> {
    return this.http.get<Show[]>(this.baseUrl);
  }

  getById(id: number): Observable<Show> {
    console.log(this.baseUrl + id);
    this.http.get<Show>(this.baseUrl + id).subscribe(data => {
      console.log(data);
    });
    return this.http.get<Show>(this.baseUrl + id);
  }

  save(data: Show): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(data: Show): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };

    return this.http.put(this.baseUrl, data, httpOptions);
  }

  delete(data: Show): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };

    return this.http.delete(this.baseUrl, httpOptions);
  }
}
