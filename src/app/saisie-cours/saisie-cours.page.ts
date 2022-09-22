import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CoursService} from '../services/cours.service';
import {Cours} from '../models/cours';

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss'],
})
export class SaisieCoursPage implements OnInit {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private coursService: CoursService
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    const coursData = this.form.value;
    this.addCours(coursData.name, coursData.nbEtudiants, coursData.professeur);
    this.router.navigate(['cours']);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators
        .pattern('^[a-zA-Z 0-9]+$')]],
      nbEtudiants: ['', Validators.required],
      professeur: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  private addCours(name: string, nbEtudiants: number, professeur: string) {
    const cours = new Cours(name, nbEtudiants, professeur);
    this.coursService.addCours(cours);
  }

}
