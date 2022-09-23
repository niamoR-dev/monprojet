import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaisieProfesseurPage } from './saisie-professeur.page';

const routes: Routes = [
  {
    path: '',
    component: SaisieProfesseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaisieProfesseurPageRoutingModule {}
