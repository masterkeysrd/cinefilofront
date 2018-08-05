import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../model/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/show/';

  constructor(private http: HttpClient) { }

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
