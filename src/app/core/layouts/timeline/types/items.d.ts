export interface TimelineItem {
  company: string;
  role: string;
  start: string;
  end?: string;
}

export type TimelineItems = TimelineItem[];
