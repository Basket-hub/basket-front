import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../service/localstorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private localStorageService: LocalstorageService, private router: Router) { }

  public showChildrenCart(): void {
    this.localStorageService.setItems([
      { id: 24, name: "Talukurk, SALVEST, 675 g", price: 1.00, shop: "Coop" },
      { id: 3, name: "Saaremaa vesi 5L", price: 0.78, shop: "Maxima" },
      { id: 37, name: "Pampers 38tk", price: 12.34, shop: "Rimi" },
      { id: 29, name: "Maasikamoos 200g", price: 4.25, shop: "Coop" },
      { id: 19, name: "Vihik 24lk", price: 0.10, shop: "Selver" },
    ])
    setTimeout(() => this.router.navigate(['shop']), 50)
  }

}
