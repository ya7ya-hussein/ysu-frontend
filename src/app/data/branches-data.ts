// src/app/data/branches-data.ts

export interface BranchTeamMember {
    name: string;
    position: string; // e.g., "رئيس الفرع", "نائب الرئيس", "مسؤول الأنشطة"
    image?: string;
    contact: {
      email?: string;
      phone?: string;
      instagram?: string;
      facebook?: string;
      linkedin?: string;
    };
  }
  
  export interface Branch {
    id: string; // Unique ID (should match universityName, e.g., "apu")
    universityName: string; // Full English name of the university
    arabicName: string; // Arabic name for display
    city: string;
    image: string; // Main banner image
    description?: string;
    establishedDate?: string; // Format: YYYY-MM-DD
    address: string; // Physical location of the university
    phone: string; // Branch phone number
    teamMembers: BranchTeamMember[];
  }
  
  // List of all branches
  export const branchesData: Branch[] = [
    {
      id: 'UM',
      universityName: 'University of Malaya',
      arabicName: 'جامعة مالايا',
      city: 'كوالالمبور',
      image: '/assets/hero_section/img4.jpeg',
      description: 'فرع اتحاد الطلبة اليمنيين في جامعة مالايا، يضم أكثر من 150 طالب وطالبة يمنيين يدرسون في مختلف التخصصات العلمية والإنسانية.',
      establishedDate: '2015-03-12',
      address: 'مبنى الأنشطة الطلابية، جامعة مالايا، 50603 كوالالمبور',
      phone: '+60123456789',
      teamMembers: [
        {
          name: 'محمد أحمد الصبري',
          position: 'رئيس الفرع',
          image: '/assets/team/um/president.jpg',
          contact: {
            email: 'president@um.ysu.org',
            phone: '+601234567890',
            instagram: 'https://instagram.com/um_president',
            facebook: 'https://facebook.com/um_president',
            linkedin: 'https://linkedin.com/in/um_president'
          }
        },
        {
          name: 'سارة محمد العنسي',
          position: 'نائب الرئيس',
          image: '/assets/team/um/vice_president.jpg',
          contact: {
            email: 'vice_president@um.ysu.org',
            phone: '+601234567891',
            instagram: 'https://instagram.com/um_vp'
          }
        },
        {
          name: 'أحمد علي المقطري',
          position: 'مسؤول الأنشطة',
          image: '/assets/team/um/activities.jpg',
          contact: {
            email: 'activities@um.ysu.org',
            phone: '+601234567892'
          }
        }
      ]
    },
    {
      id: 'IIUM',
      universityName: 'International Islamic University Malaysia',
      arabicName: 'الجامعة الإسلامية العالمية',
      city: 'كوالالمبور',
      image: '/assets/hero_section/img4.jpeg',
      description: 'فرع الاتحاد في الجامعة الإسلامية العالمية، أحد أكبر فروع الاتحاد، حيث يضم أكثر من 200 طالب وطالبة من مختلف التخصصات.',
      establishedDate: '2014-09-05',
      address: 'مبنى شؤون الطلبة، الجامعة الإسلامية العالمية، 53100 جومباك، سلانجور',
      phone: '+60123456790',
      teamMembers: [
        {
          name: 'عبدالله محمد السقاف',
          position: 'رئيس الفرع',
          image: '/assets/team/iium/president.jpg',
          contact: {
            email: 'president@iium.ysu.org',
            phone: '+601234567893',
            facebook: 'https://facebook.com/iium_president',
            linkedin: 'https://linkedin.com/in/iium_president'
          }
        },
        {
          name: 'فاطمة علي الشرعبي',
          position: 'نائب الرئيس',
          image: '/assets/team/iium/vice_president.jpg',
          contact: {
            email: 'vice_president@iium.ysu.org',
            phone: '+601234567894'
          }
        },
        {
          name: 'خالد سعيد باعباد',
          position: 'أمين الصندوق',
          image: '/assets/team/iium/treasurer.jpg',
          contact: {
            email: 'treasurer@iium.ysu.org',
            phone: '+601234567895'
          }
        },
        {
          name: 'زينب عمر الحاشدي',
          position: 'مسؤولة العلاقات العامة',
          image: '/assets/team/iium/pr.jpg',
          contact: {
            email: 'pr@iium.ysu.org',
            phone: '+601234567896',
            instagram: 'https://instagram.com/iium_pr'
          }
        }
      ]
    },
    {
      id: 'UPM',
      universityName: 'Universiti Putra Malaysia',
      arabicName: 'جامعة بوترا الماليزية',
      city: 'سلانجور',
      image: '/assets/hero_section/img4.jpeg',
      description: 'يعتبر فرع جامعة بوترا الماليزية من الفروع النشطة التي تضم العديد من الطلاب اليمنيين في مختلف المراحل الدراسية.',
      establishedDate: '2016-01-15',
      address: 'مكتب الأنشطة الطلابية، جامعة بوترا الماليزية، 43400 سيردانج، سلانجور',
      phone: '+60123456791',
      teamMembers: [
        {
          name: 'خالد علي الحمادي',
          position: 'رئيس الفرع',
          image: '/assets/team/upm/president.jpg',
          contact: {
            email: 'president@upm.ysu.org',
            phone: '+601234567897',
            linkedin: 'https://linkedin.com/in/upm_president'
          }
        },
        {
          name: 'ريم صالح الهمداني',
          position: 'نائب الرئيس',
          image: '/assets/team/upm/vice_president.jpg',
          contact: {
            email: 'vice_president@upm.ysu.org',
            phone: '+601234567898'
          }
        },
        {
          name: 'ياسر محمد العديني',
          position: 'مسؤول الشؤون الأكاديمية',
          image: '/assets/team/upm/academic.jpg',
          contact: {
            email: 'academic@upm.ysu.org',
            phone: '+601234567899'
          }
        }
      ]
    },
    {
      id: 'UTM',
      universityName: 'Universiti Teknologi Malaysia',
      arabicName: 'جامعة التكنولوجيا الماليزية',
      city: 'جوهور',
      image: '/assets/hero_section/img4.jpeg',
      description: 'فرع الاتحاد في جامعة التكنولوجيا الماليزية، يخدم الطلاب اليمنيين في تخصصات الهندسة والعلوم التطبيقية.',
      establishedDate: '2017-02-20',
      address: 'مبنى الأنشطة الطلابية، جامعة التكنولوجيا الماليزية، 81310 جوهور بارو، جوهور',
      phone: '+60123456792',
      teamMembers: [
        {
          name: 'أحمد سعيد باعباد',
          position: 'رئيس الفرع',
          image: '/assets/team/utm/president.jpg',
          contact: {
            email: 'president@utm.ysu.org',
            phone: '+601234567810',
            facebook: 'https://facebook.com/utm_president'
          }
        },
        {
          name: 'نور محمد العزاني',
          position: 'نائب الرئيس',
          image: '/assets/team/utm/vice_president.jpg',
          contact: {
            email: 'vice_president@utm.ysu.org',
            phone: '+601234567811'
          }
        }
      ]
    },
    {
      id: 'USM',
      universityName: 'Universiti Sains Malaysia',
      arabicName: 'جامعة سينز الماليزية',
      city: 'بينانج',
      image: '/assets/hero_section/img4.jpeg',
      description: 'فرع اتحاد الطلبة اليمنيين في جامعة سينز الماليزية، يقدم خدمات متنوعة للطلاب اليمنيين في الجامعة.',
      establishedDate: '2016-08-10',
      address: 'مبنى الأنشطة الطلابية، جامعة سينز الماليزية، 11800 بينانج',
      phone: '+60123456793',
      teamMembers: [
        {
          name: 'سمية محمد العمري',
          position: 'رئيسة الفرع',
          image: '/assets/team/usm/president.jpg',
          contact: {
            email: 'president@usm.ysu.org',
            phone: '+601234567812',
            instagram: 'https://instagram.com/usm_president'
          }
        },
        {
          name: 'رامي أحمد المخلافي',
          position: 'نائب الرئيس',
          image: '/assets/team/usm/vice_president.jpg',
          contact: {
            email: 'vice_president@usm.ysu.org',
            phone: '+601234567813'
          }
        },
        {
          name: 'شيماء علي القباطي',
          position: 'مسؤولة الأنشطة الثقافية',
          image: '/assets/team/usm/cultural.jpg',
          contact: {
            email: 'cultural@usm.ysu.org',
            phone: '+601234567814'
          }
        }
      ]
    },
    {
      id: 'UKM',
      universityName: 'Universiti Kebangsaan Malaysia',
      arabicName: 'جامعة كبانجسان الماليزية',
      city: 'سلانجور',
      image: '/assets/hero_section/img4.jpeg',
      description: 'فرع الاتحاد في جامعة كبانجسان الماليزية، يقدم الدعم للطلاب اليمنيين في مختلف المجالات الأكاديمية والاجتماعية.',
      establishedDate: '2015-11-05',
      address: 'قسم شؤون الطلبة، جامعة كبانجسان الماليزية، 43600 بانجي، سلانجور',
      phone: '+60123456794',
      teamMembers: [
        {
          name: 'فيصل عبدالله الشرعبي',
          position: 'رئيس الفرع',
          image: '/assets/team/ukm/president.jpg',
          contact: {
            email: 'president@ukm.ysu.org',
            phone: '+601234567815',
            linkedin: 'https://linkedin.com/in/ukm_president'
          }
        },
        {
          name: 'هدى فؤاد مكرد',
          position: 'نائبة الرئيس',
          image: '/assets/team/ukm/vice_president.jpg',
          contact: {
            email: 'vice_president@ukm.ysu.org',
            phone: '+601234567816'
          }
        }
      ]
    },
    {
      id: 'APU',
      universityName: 'Asia Pacific University',
      arabicName: 'جامعة آسيا باسيفيك',
      city: 'كوالالمبور',
      image: '/assets/branch/',
      description: 'فرع الاتحاد في جامعة آسيا باسيفيك، يخدم مجتمع الطلاب اليمنيين في الجامعة منذ تأسيسه.',
      establishedDate: '2018-09-01',
      address: 'مبنى شؤون الطلبة، جامعة آسيا باسيفيك، تيكنولوجي بارك، بوكيت جليل، 57000 كوالالمبور',
      phone: '+60123456795',
      teamMembers: [
        {
          name: 'محمد سعيد الحميري',
          position: 'رئيس الفرع',
          image: '/assets/team/apu/president.jpg',
          contact: {
            email: 'president@apu.ysu.org',
            phone: '+601234567817',
            instagram: 'https://instagram.com/apu_president',
            facebook: 'https://facebook.com/apu_president'
          }
        },
        {
          name: 'لينا نبيل الشامي',
          position: 'نائبة الرئيس',
          image: '/assets/team/apu/vice_president.jpg',
          contact: {
            email: 'vice_president@apu.ysu.org',
            phone: '+601234567818'
          }
        },
        {
          name: 'عمر خالد الأغبري',
          position: 'مسؤول التواصل الاجتماعي',
          image: '/assets/team/apu/social_media.jpg',
          contact: {
            email: 'social_media@apu.ysu.org',
            phone: '+601234567819',
            instagram: 'https://instagram.com/apu_social'
          }
        }
      ]
    },
    {
      id: 'UITM',
      universityName: 'Universiti Teknologi MARA',
      arabicName: 'جامعة مارا للتكنولوجيا',
      city: 'شاه علم',
      image: '/assets/hero_section/img4.jpeg',
      description: 'فرع اتحاد الطلبة اليمنيين في جامعة مارا للتكنولوجيا، يقدم خدمات متعددة للطلاب اليمنيين.',
      establishedDate: '2017-05-15',
      address: 'مبنى الأنشطة الطلابية، جامعة مارا للتكنولوجيا، 40450 شاه علم، سلانجور',
      phone: '+60123456796',
      teamMembers: [
        {
          name: 'عمر علي العولقي',
          position: 'رئيس الفرع',
          image: '/assets/team/uitm/president.jpg',
          contact: {
            email: 'president@uitm.ysu.org',
            phone: '+601234567820',
            linkedin: 'https://linkedin.com/in/uitm_president'
          }
        },
        {
          name: 'نجلاء سالم باحميد',
          position: 'نائبة الرئيس',
          image: '/assets/team/uitm/vice_president.jpg',
          contact: {
            email: 'vice_president@uitm.ysu.org',
            phone: '+601234567821'
          }
        },
        {
          name: 'عادل محمد العمودي',
          position: 'مسؤول الشؤون الأكاديمية',
          image: '/assets/team/uitm/academic.jpg',
          contact: {
            email: 'academic@uitm.ysu.org',
            phone: '+601234567822'
          }
        }
      ]
    }
  ];
  
  // Get unique cities from branches
  export const getCities = (): string[] => {
    const cities = branchesData.map(branch => branch.city);
    return ['الكل', ...Array.from(new Set(cities))];
  };