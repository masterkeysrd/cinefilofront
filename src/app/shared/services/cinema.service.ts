import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    console.log(this.baseUrl + id);
    this.http.get<Cinema>(this.baseUrl + id).subscribe(data => {
      console.log(data);
    });
    return this.http.get<Cinema>(this.baseUrl + id);
  }

  save(cinema: Cinema): void {
    this.http.post(this.baseUrl, cinema)
      .subscribe(
        res => {
          console.log('Cinema Save Done');
        },
        error => {
          console.log('Error Saving Cinema');
          console.log(cinema);
        }
      );
  }

  update(cinema: Cinema): void {
    this.http.put(this.baseUrl, cinema)
      .subscribe(
        res => {
          console.log('Cinema Update Done');
        },
        error => {
          console.log('Error Updating Cinema');
        } );
  }

  delete(cinema: Cinema) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: cinema
    };
    this.http.delete(this.baseUrl, httpOptions)
      .subscribe( res => {
          console.log('Cinema Delete Done');
        },
        error => {
          console.log('Error Deleting Cinema');
        });
  }
}
