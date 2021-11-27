import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public mixList: any[] = [];
  public shopName = "Maxima";

  public shops = {
    "Maxima": [
    { id: 1, name: "Kirde sai 450g", price: 0.80, shop: "Maxima" },
    { id: 6, name: "Talukurk, SALVEST, 675 g", price: 1.20, shop: "Maxima" },
    { id: 11, name: "Saaremaa vesi 5L", price: 0.78, shop: "Maxima" },
    { id: 8, name: "Pampers 38tk", price: 13.50, shop: "Maxima" },
    { id: 69, name: "Piim 1l", price: 0.6, shop: "Maxima" },
    { id: 420, name: "Eesti juust 500g", price: 1.56, shop: "Maxima" },
    { id: 666, name: "Maasikamoos 200g", price: 4.5, shop: "Maxima" },
    { id: 12, name: "Vihik 24lk", price: 0.10, shop: "Maxima" },
    { id: 24, name: "Saiake 50g", price: 0.40, shop: "Maxima" },
    { id: 5, name: "Pilaff 250g", price: 2.75, shop: "Maxima" },
    { id: 2, name: "Pitsa", price: 4.57, shop: "Maxima" }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.mixList = (JSON.parse(localStorage.getItem("selectedItems") as string));
    this.mixList = [...this.mixList];
  }

}
