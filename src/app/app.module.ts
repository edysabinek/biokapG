import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';
import { ProductsCategoriesListComponent } from './products-categories-list/products-categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MainContentComponent,
    FooterComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsCategoriesComponent,
    ProductsCategoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
