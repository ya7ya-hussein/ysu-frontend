// src/app/pages/news/news.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { NewsItem, newsData } from '../../data/news-data';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // Get news data and sort by date (most recent first)
    this.newsItems = [...newsData].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
}