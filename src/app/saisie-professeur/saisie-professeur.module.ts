import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaisieProfesseurPageRoutingModule } from './saisie-professeur-routing.module';

import { SaisieProfesseurPage } from './saisie-professeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaisieProfesseurPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SaisieProfesseurPage]
})
export class SaisieProfesseurPageModule {}
