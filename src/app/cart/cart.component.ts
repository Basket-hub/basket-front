import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public mixList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.mixList = (JSON.parse(localStorage.getItem("selectedItems") as string));
    this.mixList = [...this.mixList];
  }

}
