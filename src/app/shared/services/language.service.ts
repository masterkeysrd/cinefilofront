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

  save(language: Language): Observable<any> {
    return this.http.post<any>(this.baseUrl, language);
  }

  update(language: Language): Observable<any> {
    return this.http.put(this.baseUrl, language);
  }

  delete(language: Language): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: language
    };
    return this.http.delete(this.baseUrl, httpOptions);
  }
}
