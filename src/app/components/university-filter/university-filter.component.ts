// src/app/components/university-filter/university-filter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniversityFilter } from '../../models/university-filter.model';

@Component({
  selector: 'app-university-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './university-filter.component.html',
  styleUrls: ['./university-filter.component.scss']
})
export class UniversityFilterComponent {
  @Output() filtersChanged = new EventEmitter<UniversityFilter>();
  
  // Initial filter state
  filter: UniversityFilter = {
    city: '',
    types: [],
    minFee: undefined,
    maxFee: undefined,
    languages: [],
    courses: [],
    hasUnionBranch: false
  };

  // Type options
  typeOptions = [
    { id: 'public-university', value: 'حكومية', checked: false },
    { id: 'private-university', value: 'خاصة', checked: false }
  ];

  // Language options
  languageOptions = [
    { id: 'lang-english', value: 'إنجليزي', checked: false },
    { id: 'lang-arabic', value: 'عربي', checked: false }
  ];

  // Course options
  courseOptions = [
    { id: 'course-engineering', value: 'الهندسة', checked: false },
    { id: 'course-medicine', value: 'الطب', checked: false },
    { id: 'course-it', value: 'تقنية المعلومات', checked: false },
    { id: 'course-business', value: 'إدارة الأعمال', checked: false },
    { id: 'course-science', value: 'العلوم', checked: false }
  ];

  // Expanded courses view
  coursesExpanded = false;
  
  // Method to toggle courses view
  toggleCoursesView() {
    this.coursesExpanded = !this.coursesExpanded;
  }

  // Handle checkbox change
  onCheckboxChange(event: Event, group: string, value: string) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    
    // Update the appropriate filter group
    switch(group) {
      case 'type':
        this.updateFilterArray('types', value, checked);
        break;
      case 'language':
        this.updateFilterArray('languages', value, checked);
        break;
      case 'course':
        this.updateFilterArray('courses', value, checked);
        break;
      case 'branch':
        this.filter.hasUnionBranch = checked;
        break;
    }
    
    // Immediately emit the updated filters
    this.emitFilters();
  }

  // Handle city selection change
  onCityChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.filter.city = select.value;
    this.emitFilters();
  }

  // Handle fee range change
  onFeeChange(event: Event, field: 'minFee' | 'maxFee') {
    const input = event.target as HTMLInputElement;
    const value = input.value ? parseInt(input.value, 10) : undefined;
    this.filter[field] = value;
    this.emitFilters();
  }

  // Update filter arrays (types, languages, courses)
  private updateFilterArray(field: 'types' | 'languages' | 'courses', value: string, add: boolean) {
    if (!this.filter[field]) {
      this.filter[field] = [];
    }
    
    if (add) {
      (this.filter[field] as string[]).push(value);
    } else {
      this.filter[field] = (this.filter[field] as string[]).filter(item => item !== value);
    }
  }

  // Reset all filters
  resetFilters() {
    // Reset checkboxes
    this.typeOptions.forEach(option => option.checked = false);
    this.languageOptions.forEach(option => option.checked = false);
    this.courseOptions.forEach(option => option.checked = false);
    
    // Reset filter object
    this.filter = {
      city: '',
      types: [],
      minFee: undefined,
      maxFee: undefined,
      languages: [],
      courses: [],
      hasUnionBranch: false
    };
    
    // Emit the reset filters
    console.log("Filters reset");
    this.emitFilters();
  }

  // Apply filters (triggered by Apply button)
  applyFilters() {
    console.log("Applying filters", this.filter);
    this.emitFilters();
  }
  
  // Emit the current filters
  private emitFilters() {
    console.log("Emitting filters", this.filter);
    this.filtersChanged.emit({...this.filter});
  }
}