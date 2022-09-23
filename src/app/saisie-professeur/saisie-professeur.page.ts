import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Professeur } from '../models/professeur';
import { ProfesseurService } from '../services/professeur.service';

@Component({
  selector: 'app-saisie-professeur',
  templateUrl: './saisie-professeur.page.html',
  styleUrls: ['./saisie-professeur.page.scss'],
})
export class SaisieProfesseurPage implements OnInit {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private professeurService: ProfesseurService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    const professeurData = this.form.value;
    this.addProfesseur(professeurData.nom, professeurData.prenom, professeurData.urlPhoto, professeurData.age);
    this.router.navigate(['professeurs']);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2), Validators
        .pattern('^[a-zA-Z]+$')]],
      prenom: ['', [Validators.required, Validators.minLength(2), Validators
        .pattern('^[a-zA-Z]+$')]],
      urlPhoto:['', [Validators.required]],
      age: ['', [Validators.required]]
    });
  }

  private addProfesseur(nom: string, prenom: string, urlPhoto: string, age: number) {
    const professeur = new Professeur(nom, prenom, urlPhoto, age);
    this.professeurService.addProfesseur(professeur);
  }

}
