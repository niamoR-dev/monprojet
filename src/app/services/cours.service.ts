import { Injectable } from '@angular/core';
import {Cours} from '../models/cours';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  uri = 'http://localhost:3000/cours';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Cours[]>{
    return this.http.get<Cours[]>(this.uri);
  }

  addCours(c: Cours) {
    c.id = 0;
    this.http.post<Cours>(`${this.uri}`, c).subscribe();
  }

  deleteCours(cours: Cours): Observable<Cours>{
    return this.http.delete<Cours>(this.uri + '/' + cours.id);
  }
}
