import { Component } from '@angular/core';
import { Button } from '../ui/button/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  btnOptions = [
    { title: 'IMPORT', bgcolor: '#6e6868', icon: '' },
    { title: 'EXPORT', bgcolor: '#4db6ac', icon: '' },
    { title: 'PRESENTATION', bgcolor: '#4db6ac', icon: '' },
    { title: '', bgcolor: 'white', icon: 'M' },
    { title: '', bgcolor: 'white', icon: '?' },
  ];
}
