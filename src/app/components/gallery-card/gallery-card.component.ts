// src/app/components/gallery-card/gallery-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumItem } from '../../data/gallery-data';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent {
  @Input() album!: AlbumItem;
  
  constructor() { }
}