// src/app/pages/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { 
  administrativeTeam, 
  supervisoryTeam, 
  TeamMember 
} from '../../data/team-members.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Get team members from the data file
  administrativeTeamMembers: TeamMember[] = administrativeTeam;
  supervisoryTeamMembers: TeamMember[] = supervisoryTeam;
  
  /**
   * Get leadership members (president and vice president) for the specified section
   * @param section - 'administrative' or 'supervisory'
   * @returns Array of leadership members
   */
  getLeadershipMembers(section: 'administrative' | 'supervisory'): TeamMember[] {
    const team = section === 'administrative' ? this.administrativeTeamMembers : this.supervisoryTeamMembers;
    return team.filter(member => 
      member.role.includes('رئيس') || 
      member.role.includes('نائب الرئيس')
    );
  }
  
  /**
   * Get all non-leadership members for the specified section
   * @param section - 'administrative' or 'supervisory'
   * @returns Array of non-leadership members
   */
  getOtherMembers(section: 'administrative' | 'supervisory'): TeamMember[] {
    const team = section === 'administrative' ? this.administrativeTeamMembers : this.supervisoryTeamMembers;
    return team.filter(member => 
      !member.role.includes('رئيس') && 
      !member.role.includes('نائب الرئيس')
    );
  }
}