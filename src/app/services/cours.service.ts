import { Injectable } from '@angular/core';
import {Cours} from '../models/cours';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  uri = 'http://localhost:3000/cours';
  cours = new Array<Cours>();

  constructor(private http: HttpClient) {
  }

  getCours(): void {
    this.http.get<Cours[]>(this.uri).subscribe(
      data => data.forEach(c => this.cours.push(c))
    );
  }

  addCours(c: Cours) {
    this.http.put<Cours>(`${this.uri}`, c).subscribe();
  }
}
