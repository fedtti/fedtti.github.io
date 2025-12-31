import { Component, Input } from '@angular/core';
import { Hero } from '../../core/hero/hero';

@Component({
  selector: 'app-home',
  imports: [
    Hero
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly name: string = 'Federico Moretti';
  protected readonly role: string = 'Software Developer';
}
