import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textcard',
  imports: [],
  templateUrl: './textcard.html',
  styleUrl: './textcard.css',
})
export class Textcard {
  @Input() title!: string;
}
