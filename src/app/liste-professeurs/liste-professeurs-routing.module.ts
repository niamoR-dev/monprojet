import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeProfesseursPage } from './liste-professeurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListeProfesseursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeProfesseursPageRoutingModule {}
