import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public mixList: any[] = [];
  public oneList: any[] = [];
  public shopName = "Mix";
  public shopNames = ['Maxima', 'Rimi', 'Selver', 'Coop'];

  public shops = {
    "Maxima": [
      { id: 1, name: "Kirde sai 450g", price: 0.80, shop: "Maxima" },
      { id: 2, name: "Talukurk, SALVEST, 675 g", price: 1.20, shop: "Maxima" },
      { id: 3, name: "Saaremaa vesi 5L", price: 0.78, shop: "Maxima" },
      { id: 4, name: "Pampers 38tk", price: 13.50, shop: "Maxima" },
      { id: 5, name: "Piim 1l", price: 0.6, shop: "Maxima" },
      { id: 6, name: "Eesti juust 500g", price: 1.56, shop: "Maxima" },
      { id: 7, name: "Maasikamoos 200g", price: 4.5, shop: "Maxima" },
      { id: 8, name: "Vihik 24lk", price: 0.10, shop: "Maxima" },
      { id: 9, name: "Saiake 50g", price: 0.40, shop: "Maxima" },
      { id: 10, name: "Pilaff 250g", price: 2.75, shop: "Maxima" },
      { id: 11, name: "Pitsa", price: 4.57, shop: "Maxima" }
    ],
    "Selver": [
      { id: 12, name: "Kirde sai 450g", price: 0.90, shop: "Selver" },
      { id: 13, name: "Talukurk, SALVEST, 675 g", price: 1.10, shop: "Selver" },
      { id: 14, name: "Saaremaa vesi 5L", price: 0.98, shop: "Selver" },
      { id: 15, name: "Pampers 38tk", price: 12.50, shop: "Selver" },
      { id: 16, name: "Piim 1l", price: 0.67, shop: "Selver" },
      { id: 17, name: "Eesti juust 500g", price: 1.89, shop: "Selver" },
      { id: 18, name: "Maasikamoos 200g", price: 4.52, shop: "Selver" },
      { id: 19, name: "Vihik 24lk", price: 0.10, shop: "Selver" },
      { id: 20, name: "Saiake 50g", price: 0.24, shop: "Selver" },
      { id: 21, name: "Pilaff 250g", price: 2.34, shop: "Selver" },
      { id: 22, name: "Pitsa", price: 4.24, shop: "Selver" }
    ],
    "Coop": [
      { id: 23, name: "Kirde sai 450g", price: 0.70, shop: "Coop" },
      { id: 24, name: "Talukurk, SALVEST, 675 g", price: 1.00, shop: "Coop" },
      { id: 25, name: "Saaremaa vesi 5L", price: 0.86, shop: "Coop" },
      { id: 26, name: "Pampers 38tk", price: 12.35, shop: "Coop" },
      { id: 27, name: "Piim 1l", price: 0.50, shop: "Coop" },
      { id: 28, name: "Eesti juust 500g", price: 1.60, shop: "Coop" },
      { id: 29, name: "Maasikamoos 200g", price: 4.25, shop: "Coop" },
      { id: 30, name: "Vihik 24lk", price: 0.25, shop: "Coop" },
      { id: 31, name: "Saiake 50g", price: 0.1, shop: "Coop" },
      { id: 32, name: "Pilaff 250g", price: 2.22, shop: "Coop" },
      { id: 33, name: "Pitsa", price: 4.76, shop: "Coop" }
    ],
    "Rimi": [
      { id: 34, name: "Kirde sai 450g", price: 0.87, shop: "Rimi" },
      { id: 35, name: "Talukurk, SALVEST, 675 g", price: 1.20, shop: "Rimi" },
      { id: 36, name: "Saaremaa vesi 5L", price: 0.89, shop: "Rimi" },
      { id: 37, name: "Pampers 38tk", price: 12.34, shop: "Rimi" },
      { id: 38, name: "Piim 1l", price: 0.80, shop: "Rimi" },
      { id: 39, name: "Eesti juust 500g", price: 1.65, shop: "Rimi" },
      { id: 40, name: "Maasikamoos 200g", price: 4.34, shop: "Rimi" },
      { id: 41, name: "Vihik 24lk", price: 0.56, shop: "Rimi" },
      { id: 42, name: "Saiake 50g", price: 0.43, shop: "Rimi" },
      { id: 43, name: "Pilaff 250g", price: 2.23, shop: "Rimi" },
      { id: 44, name: "Pitsa", price: 4.40, shop: "Rimi" }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.mixList = (JSON.parse(localStorage.getItem("items") as string));
    this.mixList = [...this.mixList];
    this.mixList.forEach(product => {
      this.shops['Maxima'].forEach(maxima => {
        if (maxima['name'] === product['name']) {
          this.oneList.push(maxima);
        }
      })
    });
  }

}
