// src/app/pages/branch-detail/branch-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Branch, BranchTeamMember, branchesData } from '../../data/branches-data';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-branch-detail',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, RouterModule],
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.scss']
})
export class BranchDetailComponent implements OnInit {
  branchId: string | null = null;
  branch: Branch | undefined;
  notFound: boolean = false;
  
  // Separate arrays for leadership and regular members
  leadershipMembers: BranchTeamMember[] = [];
  regularMembers: BranchTeamMember[] = [];
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the branch ID from the route
    this.route.paramMap.subscribe(params => {
      this.branchId = params.get('id');
      
      if (this.branchId) {
        // Find the branch with the matching ID
        this.branch = branchesData.find(branch => branch.id === this.branchId);
        
        if (this.branch) {
          this.notFound = false;
          // Split team members into leadership and regular members
          this.splitTeamMembers();
        } else {
          this.branch = undefined;
          this.notFound = true;
        }
      }
    });
  }
  
  // Split team members into leadership and regular members
  private splitTeamMembers(): void {
    if (!this.branch || !this.branch.teamMembers) {
      this.leadershipMembers = [];
      this.regularMembers = [];
      return;
    }
    
    // Clear arrays
    this.leadershipMembers = [];
    this.regularMembers = [];
    
    // Filter team members
    this.branch.teamMembers.forEach(member => {
      if (this.isLeadershipPosition(member.position)) {
        this.leadershipMembers.push(member);
      } else {
        this.regularMembers.push(member);
      }
    });
  }
  
  // Check if a position is a leadership position
  isLeadershipPosition(position: string): boolean {
    return position.includes('رئيس');
  }
  
  // Format the date (YYYY-MM-DD) to a readable format in Arabic
  formatDate(dateString: string): string {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    
    // Get month name in Arabic
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                   'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }
  
  // Check if a team member has any contact information
  hasContactInfo(member: BranchTeamMember): boolean {
    return !!(member.contact?.email || 
              member.contact?.phone || 
              member.contact?.instagram || 
              member.contact?.facebook || 
              member.contact?.linkedin);
  }
}

