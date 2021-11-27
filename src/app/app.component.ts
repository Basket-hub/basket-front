import { WeirdService } from './service/weird.service';
import { Component } from '@angular/core';
import { faShoppingCart, faHome, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public faShoppingCart = faShoppingCart;
  public faHome = faHome;
  public faTag = faTag;
  public selectedItemsCount = 0;

  constructor(private weirdService: WeirdService) {
    this.selectedItemsCount = weirdService.selectedItemsCount.getValue();
    weirdService.selectedItemsCount.subscribe(val => {
      this.selectedItemsCount = val;
    })
  }
}
