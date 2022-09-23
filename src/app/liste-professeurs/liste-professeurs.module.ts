import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeProfesseursPageRoutingModule } from './liste-professeurs-routing.module';

import { ListeProfesseursPage } from './liste-professeurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeProfesseursPageRoutingModule
  ],
  declarations: [ListeProfesseursPage]
})
export class ListeProfesseursPageModule {}
