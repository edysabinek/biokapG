import { Component, OnInit } from '@angular/core';
import { ProductsCategories } from '../models/product-categories.model';
import { ProductsCategoriesService } from '../services/products-categories.service';

@Component({
  selector: 'app-products-categories-list',
  templateUrl: './products-categories-list.component.html',
  styleUrls: ['./products-categories-list.component.scss']
})
export class ProductsCategoriesListComponent implements OnInit {

  categoriesProduits !: ProductsCategories[];
  constructor (private categorieProduitService : ProductsCategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesProduits = this.categorieProduitService.categoriesProduits;
  }
}
