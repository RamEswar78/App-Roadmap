import { Component } from '@angular/core';
import { Button } from '../ui/button/button';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-middlebar',
  imports: [Button, DragDropModule],
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

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
