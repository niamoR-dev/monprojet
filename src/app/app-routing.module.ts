import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesPageModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./liste-cours/liste-cours.module').then(m => m.ListeCoursPageModule)
  },
  {
    path: 'mapage',
    loadChildren: () => import('./mapage/mapage.module').then(m => m.MapagePageModule)
  },
  {
    path: 'liste-cours',
    loadChildren: () => import('./liste-cours/liste-cours.module').then(m => m.ListeCoursPageModule)
  },
  {
    path: 'add-cours',
    loadChildren: () => import('./saisie-cours/saisie-cours.module').then(m => m.SaisieCoursPageModule)
  },
  {
    path: 'rechercher-cours',
    loadChildren: () => import('./rechercher-cours/rechercher-cours.module').then(m => m.RechercherCoursPageModule)
  },
  {
    path: 'add-professeur',
    loadChildren: () => import('./saisie-professeur/saisie-professeur.module').then( m => m.SaisieProfesseurPageModule)
  },
  {
    path: 'professeurs',
    loadChildren: () => import('./liste-professeurs/liste-professeurs.module').then( m => m.ListeProfesseursPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
