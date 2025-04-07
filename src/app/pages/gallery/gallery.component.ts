// src/app/pages/gallery/gallery.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { GalleryCardComponent } from '../../components/gallery-card/gallery-card.component';
import { AlbumItem, galleryData } from '../../data/gallery-data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, GalleryCardComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  albums: AlbumItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // Load albums from the data file
    this.albums = galleryData;
  }
}