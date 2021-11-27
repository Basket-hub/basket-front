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
    { id: 23, name: "Kirde sai 450g", price: 0.70, shop: "Coop" },
    { id: 24, name: "Talukurk, SALVEST, 675 g", price: 1.00, shop: "Coop" },
    { id: 3, name: "Saaremaa vesi 5L", price: 0.78, shop: "Maxima" },
    { id: 37, name: "Pampers 38tk", price: 12.34, shop: "Rimi" },
    { id: 27, name: "Piim 1l", price: 0.50, shop: "Coop" },
    { id: 6, name: "Eesti juust 500g", price: 1.56, shop: "Maxima" },
    { id: 29, name: "Maasikamoos 200g", price: 4.25, shop: "Coop" },
    { id: 19, name: "Vihik 24lk", price: 0.10, shop: "Selver" },
    { id: 20, name: "Saiake 50g", price: 0.24, shop: "Selver" },
    { id: 32, name: "Pilaff 250g", price: 2.22, shop: "Coop" },
    { id: 22, name: "Pitsa", price: 4.24, shop: "Selver" }
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
    localStorage.setItem('items', JSON.stringify(this.selectedItems));
    this.weirdService.selectedItemsCount.next(this.selectedItems.length);
  }
}
