// src/app/pages/branches/branches.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { BranchCardComponent } from '../../components/branch-card/branch-card.component';
import { Branch, branchesData, getCities } from '../../data/branches-data';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent, BranchCardComponent],
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  // All branches data
  allBranches: Branch[] = [];
  
  // Filtered branches to display
  filteredBranches: Branch[] = [];
  
  // List of cities for the filter
  cities: string[] = [];
  
  // Selected city filter
  selectedCity: string = 'الكل';

  constructor() { }

  ngOnInit(): void {
    // Load branches data
    this.allBranches = branchesData;
    this.filteredBranches = [...this.allBranches];
    
    // Get unique cities list
    this.cities = getCities();
  }
  
  // Filter branches by city
  filterByCity(city: string): void {
    this.selectedCity = city;
    
    if (city === 'الكل') {
      this.filteredBranches = [...this.allBranches];
    } else {
      this.filteredBranches = this.allBranches.filter(branch => branch.city === city);
    }
  }
}