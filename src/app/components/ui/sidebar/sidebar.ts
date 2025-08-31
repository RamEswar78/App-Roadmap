import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  links = [
    { icon: 'far fa-user', link: '#' },
    { icon: 'far fa-envelope', link: '#' },
    { icon: 'far fa-bell', link: '#' },
    { icon: 'far fa-calendar', link: '#' },
    { icon: 'far fa-heart', link: '#' },
    { icon: 'far fa-comment', link: '#' },
  ];
}
