import { Component, Input } from '@angular/core';
import { ProductsCategories } from '../models/product-categories.model';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.scss']
})
export class ProductsCategoriesComponent {
  @Input() categorieProduit!: ProductsCategories; //on pourra utiliser cetegorieProduit comme selecteur

}
