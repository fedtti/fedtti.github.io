import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TimelineItems } from './types/items';

@Component({
  selector: 'app-timeline',
  imports: [DatePipe],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class TimelineComponent {
  protected readonly items: TimelineItems = [
    {
      company: 'Smile.CX Tech (formerly EsoSphera, Covisian Group)',
      role: 'Full-Stack Developer at Technical Delivery',
      start: 'October 2024'
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
      role: 'Front-End Developer at AIKnowYou',
      start: 'June 2020',
      end: 'December 2020'
    }
  ];
}
