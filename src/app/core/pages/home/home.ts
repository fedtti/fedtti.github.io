import { Component } from '@angular/core';
import { HeroComponent } from '../../layouts/hero/hero';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  protected readonly name: string = 'Federico Moretti';
  protected readonly role: string = 'Software Developer';
}
