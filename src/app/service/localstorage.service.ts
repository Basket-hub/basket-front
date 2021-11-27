import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  public loadItems(): any[] | null {
    const items = localStorage.getItem('items');
    if (items) {
      return JSON.parse(items);
    }
    return null;
  }

  public setItems(items: any[]): void {
    localStorage.setItem('items', JSON.stringify(items));
  }
}
