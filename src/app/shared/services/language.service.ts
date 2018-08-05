import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Language} from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private baseUrl = 'http://localhost:8080/cinefilo-0.0.1-SNAPSHOT/language/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Language[]> {
    return this.http.get<Language[]>(this.baseUrl);
  }

  getById(id: number): Observable<Language> {
    console.log(this.baseUrl + id);
    this.http.get<Language>(this.baseUrl + id).subscribe(data => {
      console.log(data);
    });
    return this.http.get<Language>(this.baseUrl + id);
  }

  save(language: Language): void {
    this.http.post(this.baseUrl, language)
      .subscribe(
        res => {
          console.log('Language Save Done');
        },
        error => {
          console.log('Error Saving Language');
        }
      );
  }

  update(language: Language): void {
    this.http.put(this.baseUrl, language)
      .subscribe(
        res => {
          console.log('Language Update Done');
        },
        error => {
          console.log('Error Updating Language');
        } );
  }

  delete(language: Language) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: language
    };
    this.http.delete(this.baseUrl, httpOptions)
      .subscribe( res => {
          console.log('Language Delete Done');
        },
        error => {
          console.log('Error Deleting Language');
        });
  }
}
