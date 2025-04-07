// src/app/data/team-members.data.ts

// Interface for team member
export interface TeamMember {
    name: string;
    role: string;
    image: string;
    section: 'administrative' | 'supervisory';
  }
  
  // Administrative team members (الهيئة الادارية للاتحاد العام)
  export const administrativeTeam: TeamMember[] = [
    {
      name: 'عبدالرحمن فيصل النور',
      role: 'رئيس الاتحاد',
      image: 'assets/team/aziz_razq.jpg',
      section: 'administrative'
    },
    {
      name: '-',
      role: 'نائب الرئيس',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'administrative'
    },
    {
      name: 'رائد عبدالله بوسعيد',
      role: 'الأمين العام',
      image: 'assets/team/raed_abdullah.jpg',
      section: 'administrative'
    },
    {
      name: '-',
      role: 'مسؤول الفروع',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'administrative'
    },
    {
      name: 'أنس عادل باخرمة',
      role: 'المسؤول الإعلامي',
      image: 'assets/team/anas_adel.jpg',
      section: 'administrative'
    },
    {
      name: '-',
      role: 'مسؤول العلاقات العامة',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'administrative'
    },
    {
      name: '-',
      role: 'المسؤول الاجتماعي والثقافي',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'administrative'
    },
    {
      name: 'تيسير سلطان ياسين',
      role: 'مسؤولة الطالبات',
      image: 'assets/team/tayseer_sultan.jpg',
      section: 'administrative'
    },
    {
      name: '-',
      role: 'المسؤول الرياضي',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'administrative'
    },
    {
      name: 'يحيى الصباحي',
      role: 'المسؤول المالي',
      image: '/assets/about/team/yahya_alsabahi.jpeg',
      section: 'administrative'
    },
    {
      name: '-',
      role: 'المسؤول الأكاديمي',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'administrative'
    }
  ];
  
  // Supervisory team members (هيئة الرقابة والتفتيش)
  export const supervisoryTeam: TeamMember[] = [
    {
      name: 'رمزي قاسم',
      role: 'رئيس الهيئة',
      image: 'assets/team/ramzi_qasem.jpg',
      section: 'supervisory'
    },
    {
      name: 'يعقوب سعد الجمالي',
      role: 'نائب الرئيس',
      image: 'assets/team/yaqoub_saad.jpg',
      section: 'supervisory'
    },
    {
      name: '-',
      role: 'مقرر',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'supervisory'
    },
    {
      name: '-',
      role: 'عضو',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'supervisory'
    },
    {
      name: '-',
      role: 'عضو',
      image: '/assets/about/team/Placeholder_Person.jpg',
      section: 'supervisory'
    }
  ];
  
  // Export all team members
  export const getAllTeamMembers = (): TeamMember[] => {
    return [...administrativeTeam, ...supervisoryTeam];
  };