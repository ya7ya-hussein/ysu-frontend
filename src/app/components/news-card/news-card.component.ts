// src/app/components/news-card/news-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsItem } from '../../data/news-data';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() news!: NewsItem;
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
  
  truncateDescription(description: string, maxLength: number = 120): string {
    if (description.length <= maxLength) {
      return description;
    }
    
    return description.substring(0, maxLength) + '...';
  }
}