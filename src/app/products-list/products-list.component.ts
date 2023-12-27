import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  
  //@Input() listeProduit!: ProductsListComponent;

  produits !: Products[];
  constructor (private productsService : ProductsService) {
  }

  ngOnInit(): void {
    this.produits = this.productsService.produits;
  }
}
