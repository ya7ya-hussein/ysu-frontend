// src/app/components/navbar/navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    
    // Check if click was on or inside the menu toggle button
    if (target.closest('.menu-toggle')) {
      // It's the toggle button, don't do anything here
      // The toggleMenu() method will be called by the button click
      return;
    }
    
    // Close menu if clicking outside the menu or on a menu link
    if (this.isMenuOpen && 
        (!target.closest('.nav-links') || target.closest('a'))) {
      this.isMenuOpen = false;
    }
  }
}
