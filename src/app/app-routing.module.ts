import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductsCategoriesListComponent } from './products-categories-list/products-categories-list.component';

const routes: Routes = [
  { path : '' , component: MainContentComponent},
  { path : 'products' , component: ProductsCategoriesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
