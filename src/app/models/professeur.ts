export class Professeur {
  id !: number;
  nom !: string;
  prenom !: string;
  urlPhoto !: string;
  age !: number;

  constructor(nom: string, prenom: string, urlPhoto: string, age: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.urlPhoto = urlPhoto;
    this.age = age;
  }
}
