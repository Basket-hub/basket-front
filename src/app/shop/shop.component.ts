import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() selectedItems: any[] = [];
  public faSearch = faSearch;
  public faSpinner = faSpinner;

  public filter = "";

  public someRandomItems = [ // TODO: replace with mock data from service
    { id: 1, name: "cheese", price: 4.49 },
    { id: 2, name: "yogurt", price: 1.24 },
    { id: 3, name: "bread", price: 0.65 },
    { id: 4, name: "milk", price: 1.12 },
  ]

  constructor() { }

  ngOnInit(): void {
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
  }

}
