import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/ui/button/button';
import { Header } from './components/header/header';
import { Body } from './components/body/body';



@Component({
  selector: 'app-root',
  imports: [Header,Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

