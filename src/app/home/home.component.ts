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
      {id: 6, name: "Talukurk, SALVEST, 675 g", price: 1.69, shop: "Selver"},
      {id: 11, name: "Saaremaa vesi 5L", price: 0.99, shop: "Rimi"},
      {id: 8, name: "Pampers 38tk", price: 11.99, shop: "Selver"},
      {id: 666, name: "Maasikamoos 200g", price: 111, shop: "Maxima"},
      {id: 12, name: "Vihik 24lk", price: 111, shop: "Rimi"}
    ])
    setTimeout(() => this.router.navigate(['shop']), 50)
  }

}
