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

  constructor(private service: CoursService) {
  }

  ngOnInit() {
    this.service.getCours();
    this.cours = this.service.cours;
  }

}
