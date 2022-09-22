export class Cours {
  id !: number;
  name !: string;
  nbEtudiants !: number;
  professeur !: string;


  constructor(name: string, nbEtudiants: number, professeur: string) {
    this.name = name;
    this.nbEtudiants = nbEtudiants;
    this.professeur = professeur;
  }
}
