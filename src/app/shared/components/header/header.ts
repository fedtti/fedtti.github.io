import { Component } from '@angular/core';
import { ThemeComponent } from './theme/theme';

@Component({
  selector: 'app-header',
  imports: [ ThemeComponent ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent { }
