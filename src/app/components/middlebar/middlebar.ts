import { Component } from '@angular/core';
import { Button } from '../ui/button/button';

@Component({
  selector: 'app-middlebar',
  imports: [Button],
  templateUrl: './middlebar.html',
  styleUrls: ['./middlebar.css'],
})
export class Middlebar {
  items = [
    { name: 'Apache Kafka' },
    { name: 'ApexFin' },
    { name: 'ATOM' },
    { name: 'ACH Universal' },
    { name: 'ACH Positive Pay' },
    { name: 'Dominion Leasing' },
  ];

  selectedItem: any = null;

  selectItem(item: any) {
    this.selectedItem = item;
  }
}
