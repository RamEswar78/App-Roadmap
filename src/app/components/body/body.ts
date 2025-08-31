import { Component } from '@angular/core';
import { Sidebar } from '../ui/sidebar/sidebar';
import { Middlebar } from '../middlebar/middlebar';
import { Cards } from '../ui/cards/cards';
// import { QuillModule } from 'ngx-quill';
// import { FormsModule } from '@angular/forms';
import { Textcard } from '../ui/textcard/textcard';
@Component({
  selector: 'app-body',
  imports: [Sidebar, Middlebar, Cards, Textcard],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  cards = ['Evaluate', 'Retain', 'Make the Standard', 'Discontinue', 'Prohibit'];
  textcards = ['Proposed Changes', 'Benifits', 'Disadvantages'];
}
