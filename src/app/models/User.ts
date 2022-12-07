export interface User{
  matricule: string,
  nom: string,
  prenom: string,
  email: string,
  role: string,
  mdp: string,
  photo: string | null,
  etat: 1,
  date_inscription: string,
  date_modification: string | null,
  date_archivage: string | null,
}
