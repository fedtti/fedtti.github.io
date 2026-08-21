import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { type TimelineItems } from './types/items';

@Component({
  selector: 'app-timeline',
  imports: [ DatePipe ],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class TimelineComponent {
  protected readonly items: TimelineItems = [
    {
      company: 'Lefebvre Giuffrè',
      role: 'Front-End Developer at Software Factory',
      start: 'June 2026'
    },
    {
      company: 'Smile.CX Tech (formerly EsoSphera, Covisian Group)',
      role: 'Full-Stack Developer at Technical Delivery',
      start: 'October 2024',
      end: 'May 2026'
    },
    {
      company: 'Covisian',
      role: 'Full-Stack Developer at Professional Services',
      start: 'March 2022',
      end: 'June 2025'
    },
    {
      company: 'Vivocha (Covisian Group)',
      role: 'Full-Stack Developer at Customer Success Management',
      start: 'January 2021',
      end: 'June 2025'
    },
    {
      company: 'Digitiamo',
      role: 'Front-End Developer at AiKnowYou',
      start: 'June 2020',
      end: 'December 2020'
    }
  ];
}
