import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professeur } from '../models/professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  uri = 'http://localhost:3000/professeurs';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Professeur[]>{
    return this.http.get<Professeur[]>(this.uri);
  }

  addProfesseur(professeur: Professeur) {
    professeur.id = 0;
    this.http.post<Professeur>(`${this.uri}`, professeur).subscribe();
  }

  deleteProfesseur(professeur: Professeur): Observable<Professeur>{
    return this.http.delete<Professeur>(this.uri +'/' + professeur.id);
  }

}
