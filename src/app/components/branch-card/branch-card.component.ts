// src/app/components/branch-card/branch-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Branch } from '../../data/branches-data';

@Component({
  selector: 'app-branch-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.scss']
})
export class BranchCardComponent {
  @Input() branch!: Branch;
  
  constructor() { }
  
  // Format the establishment date from YYYY-MM-DD to a more readable format
  formatDate(dateString: string): string {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    
    // Get month name
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }
}