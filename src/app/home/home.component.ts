import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faSearch = faSearch;
  public faSpinner = faSpinner;

  public someRandomItems = [
    { id: 1, name: "cheese", price: 4.49 },
    { id: 2, name: "yogurt", price: 1.24 },
    { id: 3, name: "bread", price: 0.65 },
    { id: 4, name: "milk", price: 1.12 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
