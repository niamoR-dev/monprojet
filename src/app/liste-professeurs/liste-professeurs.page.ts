import { Component, OnInit } from '@angular/core';
import { Professeur } from '../models/professeur';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-liste-professeurs',
  templateUrl: './liste-professeurs.page.html',
  styleUrls: ['./liste-professeurs.page.scss'],
})
export class ListeProfesseursPage implements OnInit {

  professeurs!: Professeur[];
  professeur!: Professeur;

  constructor(private service: ProfesseurService) { }

  ngOnInit() {
    this.getProfesseurs();
  }

  deleteProfesseur(professeur: Professeur) {
    this.service.deleteProfesseur(professeur).subscribe(() => {
      console.log('suppression du professeur', professeur.id);
      this.ngOnInit();
    });
  }

  getProfesseurs() {
    this.service.findAll().subscribe(list => this.professeurs = list);
  }

}
