import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { Hero } from '../../core/hero/hero';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Footer,
    Hero
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
