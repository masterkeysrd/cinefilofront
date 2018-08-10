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
    return this.http.get<Genre>(this.baseUrl + id);
  }

  save(genre: Genre): Observable<any> {
    return this.http.post(this.baseUrl, genre);
  }

  update(genre: Genre): Observable<any> {
    return this.http.put(this.baseUrl, genre);
  }

  delete(genre: Genre): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: genre
    };
    return this.http.delete<any>(this.baseUrl, httpOptions);
  }
}
