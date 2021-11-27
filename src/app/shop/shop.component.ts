import { WeirdService } from './../service/weird.service';
import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {LocalstorageService} from '../service/localstorage.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public selectedItems: any[] = [];
  public faSearch = faSearch;
  public faSpinner = faSpinner;

  public filter = "";

  public itemsBeingDisplayed = [
    {id: 1, name: "Kirde sai 450g", price: 0.79, shop: "Coop"},
    {id: 2, name: "Talukurk, SALVEST, 675 g", price: 1.69, shop: "Selver"},
    {id: 3, name: "Saaremaa vesi 5L", price: 0.99, shop: "Rimi"},
    {id: 4, name: "Pampers 38tk", price: 11.99, shop: "Selver"},
    {id: 5, name: "Piim 1l", price: 1.20, shop: "Maxima"},
    {id: 6, name: "Eesti juust 500g", price: 1.56, shop: "Coop"},
    {id: 7, name: "Maasikamoos 200g", price: 1.29, shop: "Maxima"},
    {id: 8, name: "Vihik 24lk", price: 0.4, shop: "Rimi"},
    {id: 9, name: "Saiake 50g", price: 0.35, shop: "Selver"},
    {id: 10, name: "Pilaff 250g", price: 2.20, shop: "Coop"},
    {id: 11, name: "Pitsa", price: 1.9, shop: "Maxima"},
  ]

  constructor(private weirdService: WeirdService, private localStorageService: LocalstorageService) {}

  ngOnInit(): void {
    const items = this.localStorageService.loadItems();
    this.selectedItems = items ? items : [];
    setTimeout(() => this.weirdService.selectedItemsCount.next(this.selectedItems.length), 50)
  }

  public clearSelection(): void {
    localStorage.removeItem('items');
    this.selectedItems = [];
    this.weirdService.selectedItemsCount.next(this.selectedItems.length);
  }

  public isItemSelected(itemId: number): boolean {
    return !!this.selectedItems.find(item => item.id === itemId);
  }

  public onItemSelect(item: any): void {
    if (!this.isItemSelected(item.id)) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(i => i.id !== item.id);
    }
    localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
    this.weirdService.selectedItemsCount.next(this.selectedItems.length);
  }
}
