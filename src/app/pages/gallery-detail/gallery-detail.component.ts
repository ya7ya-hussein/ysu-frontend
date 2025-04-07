// src/app/pages/gallery-detail/gallery-detail.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumItem, galleryData } from '../../data/gallery-data';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-gallery-detail',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, RouterModule],
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
  albumId: string | null = null;
  album: AlbumItem | undefined;
  notFound: boolean = false;
  
  // Lightbox properties
  showLightbox: boolean = false;
  currentImageIndex: number = 0;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the album ID from the route
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('id');
      
      if (this.albumId) {
        // Find the album with the matching ID
        this.album = galleryData.find(album => album.id === this.albumId);
        
        if (this.album) {
          this.notFound = false;
        } else {
          this.album = undefined;
          this.notFound = true;
        }
      }
    });
  }
  
  // Open lightbox with selected image
  openLightbox(index: number): void {
    if (this.album && this.album.images.length > 0) {
      this.currentImageIndex = index;
      this.showLightbox = true;
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
    }
  }
  
  // Close lightbox
  closeLightbox(event: Event): void {
    // Only close if clicking directly on the lightbox background, not on the image
    if ((event.target as HTMLElement).classList.contains('lightbox')) {
      this.showLightbox = false;
      // Restore body scrolling
      document.body.style.overflow = '';
    }
    
    // Close if clicking on the close button
    if ((event.target as HTMLElement).closest('.lightbox-close')) {
      this.showLightbox = false;
      // Restore body scrolling
      document.body.style.overflow = '';
      event.stopPropagation();
    }
  }
  
  // Navigate to next image
  nextImage(event: Event): void {
    event.stopPropagation();
    if (this.album && this.album.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.album.images.length;
    }
  }
  
  // Navigate to previous image
  prevImage(event: Event): void {
    event.stopPropagation();
    if (this.album && this.album.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.album.images.length) % this.album.images.length;
    }
  }
  
  // Handle keyboard navigation in lightbox
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.showLightbox) return;
    
    switch (event.key) {
      case 'ArrowRight':
        // In RTL, right arrow goes to previous image
        this.prevImage(new Event('keydown'));
        break;
      case 'ArrowLeft':
        // In RTL, left arrow goes to next image
        this.nextImage(new Event('keydown'));
        break;
      case 'Escape':
        this.showLightbox = false;
        document.body.style.overflow = '';
        break;
    }
  }
}