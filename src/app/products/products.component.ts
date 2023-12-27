import { Component, Input } from '@angular/core';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() produit !: Products; //Permet d'utiliser produit comme un décorateur dans le html

}
