import { Injectable } from "@angular/core";
import { ProductsCategories } from "../models/product-categories.model";

// Pour déclarer une classe comme étant un service.
@Injectable ({
    providedIn: 'root' // Permet d'enregistrer le service à la racine de l'application
})

export class ProductsCategoriesService {
    //Pas de methode onInit sur les services
    categoriesProduits : ProductsCategories[] = [
        {
            categorie : 'fruits',
            label: 'Fruits séchés',
            resume: 'Nos fruits sont sélectionnés avec soin auprès de nos agriculteurs locaux et traités sans ingrédients chimiques afin de vous offrir des produits <strong>100% naturels</strong>. \
                <br/> <br/>\
                Lavés et découpés, les fruits sont soumis au séchage pour en retirer l\'eau. <br/>\
                <strong>Riches en protéines et minéraux</strong>, les fruits déshydratés vont booster votre corps, fortifier vos os et vous donner de l\'énergie à n\'importe quel moment de la journée. \
                <br/> <br/>\
                Vous pourrez découvrir les nombreux autres bienfaits spécifiques à chaque fruit en parcourant notre sélection de fruits ci-dessous 👇🏾👇🏾',
            listeProduits: [
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
            }
        ]
    },
        {
            categorie : 'epices',
            label: 'Thé & épices',
            resume: 'De même que nos fruits, les plantes que nous transformons sont issues de l\'agiculture locale. \
            <br/> <br/>\
            Lavées, séchées, broyées et reconditionnées, les produits obtenus permettent une utilisation plus pratique et une bonne conservation. <br/>\
            Découvrez les nombreux bienfaits spécifiques à chaque plante en parcourant notre sélection de produits. 👇🏾👇🏾',
            listeProduits: [
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
                    photo: '../../assets/media/products/affiche_artemisia.jpg',
                    categorie: 'epices',
                    disponibilite: 1,
                    poids: 100
                }
            ]
        }
    ];
}