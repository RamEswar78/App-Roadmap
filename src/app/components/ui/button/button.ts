import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() bgcolor!: string;
  @Input() fullWidth: boolean = false;
  @Input() height: string = 'auto';
}
