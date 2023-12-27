import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {

  //Permet d'afficher ou non la nav au click sur le boutton
  toggleNavbar = true;
  
  onNavButtonClick() {
    this.toggleNavbar = !this.toggleNavbar
  }
}
