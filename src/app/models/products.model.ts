export class Products {
    id !: number;
    nom !: string;
    description !: string;
    prix !: number;
    photo !: string;
    categorie !: string;
    disponibilite !: number;
    poids ?: number;
    descriptionComplete ?: string;
}