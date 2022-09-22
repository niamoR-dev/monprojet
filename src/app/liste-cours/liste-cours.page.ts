import {Component, OnInit} from '@angular/core';
import {Cours} from '../models/cours';
import {CoursService} from '../services/cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.page.html',
  styleUrls: ['./liste-cours.page.scss'],
})
export class ListeCoursPage implements OnInit {

  cours!: Cours[];
  singleCours!: Cours;

  constructor(private service: CoursService) {
  }

  ngOnInit() {
    this.getCours();
  }

  deleteCours(cours: Cours) {
    this.service.deleteCours(cours).subscribe(() => {
      console.log('suppression du cours ', cours.id);
      this.ngOnInit();
    });
  }

  getCours() {
    this.service.findAll().subscribe(list => this.cours = list);
  }
}
