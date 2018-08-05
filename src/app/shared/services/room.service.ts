import { Injectable } from '@angular/core';
import {Room} from '../model/room';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/room/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl);
  }

  getById(id: number): Observable<Room> {
    console.log(this.baseUrl + id);
    this.http.get<Room>(this.baseUrl + id).subscribe(data => {
      console.log(data);
    });
    return this.http.get<Room>(this.baseUrl + id);
  }

  save(data: Room): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(data: Room): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };

    return this.http.put(this.baseUrl, data, httpOptions);
  }

  delete(data: Room): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };

    return this.http.delete(this.baseUrl, httpOptions);
  }

}
