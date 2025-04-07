// src/app/pages/news-detail/news-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NewsItem, newsData } from '../../data/news-data';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, RouterModule],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsId: string | null = null;
  newsItem: NewsItem | undefined;
  notFound: boolean = false;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the news ID from the route
    this.route.paramMap.subscribe(params => {
      this.newsId = params.get('id');
      
      if (this.newsId) {
        // Find the news item with the matching ID
        this.newsItem = newsData.find(news => news.id === this.newsId);
        
        if (this.newsItem) {      
          this.notFound = false;
        } else {
          this.newsItem = undefined;
          this.notFound = true;
        }
      }
    });
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
}