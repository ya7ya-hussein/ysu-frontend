// src/app/pages/home/home.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// EventItem interface (renamed from Event to avoid conflict with DOM Event)
interface EventItem {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Array of high-quality image paths for the slider
  sliderImages: string[] = [
    '/assets/hero_section/img4.jpeg',  // University campus
    '/assets/hero_section/img4.jpeg', // Students collaborating
    '/assets/hero_section/img4.jpeg',  // Modern library
    '/assets/hero_section/img4.jpeg', // Graduation ceremony
  ];

  // Current image index
  currentIndex: number = 0;
  
  // Timer for image transitions
  private intervalId: any;
  
  // Control whether animations should run
  isPaused: boolean = false;
  
  // Default interval duration
  transitionInterval: number = 6000; // 6 seconds for a more luxury feel

  // Array of upcoming events
  upcomingEvents: EventItem[] = [
    {
      title: 'ملتقى الطلاب الجدد',
      date: '2024-08-15',
      location: 'جامعة آسيا باسيفيك',
      description: 'لقاء تعريفي للطلاب الجدد القادمين إلى ماليزيا، يتضمن إرشادات هامة وفرصة للتعارف',
      image: '/assets/events/event1.jpg'
    },
    {
      title: 'المؤتمر العلمي السنوي',
      date: '2024-09-10',
      location: 'الجامعة الإسلامية العالمية',
      description: 'مؤتمر علمي يجمع الباحثين اليمنيين في مختلف التخصصات لعرض أبحاثهم ومناقشتها',
      image: '/assets/events/event2.jpg'
    },
    {
      title: 'دورة مهارات البحث العلمي',
      date: '2024-08-25',
      location: 'جامعة مالايا',
      description: 'دورة تدريبية في أساسيات البحث العلمي وكيفية كتابة الأوراق البحثية بمعايير عالمية',
      image: '/assets/events/event3.jpg'
    }
  ];

  // Array of latest news
  latestNews = [
    {
      title: 'الاجتماع السنوي للهيئة الإدارية',
      date: '2024-06-15',
      image: '/assets/news/news1.jpg',
      description: 'عقدت الهيئة الإدارية للاتحاد اجتماعها السنوي لمناقشة خطط العام الدراسي القادم والإنجازات التي تحققت خلال العام الماضي'
    },
    {
      title: 'توقيع اتفاقية تعاون مع السفارة اليمنية',
      date: '2024-06-05',
      image: '/assets/news/news2.jpg',
      description: 'وقع اتحاد الطلبة اليمنيين في ماليزيا اتفاقية تعاون مع السفارة اليمنية في كوالالمبور لتسهيل معاملات الطلاب وتقديم الدعم لهم'
    },
    {
      title: 'نتائج انتخابات فرع جامعة مالايا',
      date: '2024-05-20',
      image: '/assets/news/news3.jpg',
      description: 'أعلن اتحاد الطلبة اليمنيين عن نتائج انتخابات الهيئة الإدارية لفرع جامعة مالايا للعام الدراسي 2024-2025 وأسماء الفائزين'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Start automatic image transition
    this.startImageTransition();
    
    // Preload images for smoother experience
    this.preloadImages();
  }

  ngOnDestroy(): void {
    // Clear timer when component is destroyed
    this.clearImageTransition();
  }
  
  // Preload all slider images
  preloadImages(): void {
    this.sliderImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // Start automatic image transition
  startImageTransition(): void {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.nextImage();
      }
    }, this.transitionInterval);
  }

  // Clear the timer
  clearImageTransition(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Go to next image
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.sliderImages.length;
    this.resetTimer();
  }

  // Go to previous image
  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
    this.resetTimer();
  }

  // Reset timer when manually navigating
  resetTimer(): void {
    this.clearImageTransition();
    this.startImageTransition();
  }

  // Scroll to the next section
  scrollToNextSection(): void {
    const nextSection = document.querySelector('#next-events');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  // Format date to extract day
  formatDay(dateString: string): string {
    const date = new Date(dateString);
    return date.getDate().toString();
  }
  
  // Format date to extract month
  formatMonth(dateString: string): string {
    const date = new Date(dateString);
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    return months[date.getMonth()];
  }
  
  // Pause slider on hover to improve user experience
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isPaused = true;
  }
  
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isPaused = false;
  }
  
  // Prevent transition during page visibility change
  @HostListener('document:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) {
      this.isPaused = true;
    } else {
      this.isPaused = false;
    }
  }

  // method to format news dates
  formatNewsDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }
}