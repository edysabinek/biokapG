import { Injectable } from "@angular/core";
import { Products } from "../models/products.model";

// Pour déclarer une classe comme étant un service.
@Injectable ({
    providedIn: 'root' // Permet d'enregistrer le service à la racine de l'application
})

export class ProductsService {
    //Pas de methode onInit sur les services
    produits : Products[] = [
        {
            id: 1,
            nom: 'Banane séchée',
            description: 'Lutte contre la constipation, Soulage les brûlûres d\'estomac, Aide à la digestion',
            prix: 1000,
            photo: '../../assets/media/products/banane.jpg',
            categorie: 'fruits',
            disponibilite: 1,
            poids: 100
        },
        {
            id: 2,
            nom: 'Ananas séché',
            description: 'Élimine l\'oedème, Aide à la digestion, Augmente l\'appétit.',
            prix: 1000,
            photo: '../../assets/media/products/Ananas.jpg',
            categorie: 'fruits',
            disponibilite: 1,
            poids: 100
        },
        {
            id: 3,
            nom: 'Papaye séchée',
            description: 'Lutte contre le stress oxydant, Les troubles occulaires et cutanés, Aide à la digestion. ',
            prix: 1000,
            photo: '../../assets/media/products/papayes.jpg',
            categorie: 'fruits',
            disponibilite: 0,
            poids: 100
        },
        {
            id: 4,
            nom: 'Pomme séchée',
            description : 'Lutte contre le stress oxydant, Les problèmes cardio vasculaires, Élimine les graisses',
            prix: 1000,
            photo: '../../assets/media/products/pommes_1.jpg',
            categorie: 'fruits',
            disponibilite: 1,
            poids: 100
        },
        {
            id: 5,
            nom: 'Mangue séchée',
            description : 'Lutte contre le stress oxydant, Les problèmes cardio vasculaires, Élimine les graisses',
            prix: 1000,
            photo: '../../assets/media/products/pommes_1.jpg',
            categorie: 'fruits',
            disponibilite: 0,
            poids: 100 
        },
        {
            id: 6,
            nom: 'Poudre de gingembre',
            description : 'Rehausse et apporte du piquant à vos préparations, Anti-inflammatoire et anti-oxydant naturel, Améliore le travail et réduit les mouvements de l\'estomac \
            Combat les nausées, améliore la digestion',
            prix: 1000,
            photo: '../../assets/media/products/gingembre_bienfaits.jpg',
            categorie: 'epices',
            disponibilite: 1,
            poids: 100 
        },
        {
            id: 7,
            nom: 'Poudre de foléré (oseil séché)',
            description : '',
            prix: 1000,
            photo: '../../assets/media/products/gingembre_bienfaits.jpg',
            categorie: 'epices',
            disponibilite: 1,
            poids: 100
        },
        {
            id: 8,
            nom: 'Artemisia Annua',
            description : 'Artemisia annua pour la lutte contre le paludisme et plus encore.',
            prix: 1000,
            photo: '../../assets/media/products/affiche_artemesia.jpg',
            categorie: 'epices',
            disponibilite: 1,
            poids: 100
        }
    ];
}