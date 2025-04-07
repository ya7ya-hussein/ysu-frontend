// src/app/data/gallery-data.ts

export interface AlbumItem {
  id: string;
  title: string;
  date: string;
  description: string;
  mainImage: string;
  images: string[];
}

export const galleryData: AlbumItem[] = [
  {
    id: '1',
    title: 'حفل استقبال الطلاب الجدد 2024',
    date: '15/02/2024',
    description: 'حفل استقبال الطلاب اليمنيين الجدد في ماليزيا، الذي أقيم في قاعة الاجتماعات الكبرى بالجامعة الإسلامية العالمية في كوالالمبور',
    mainImage: '/assets/hero_section/img4.jpeg',
    images: [
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg'
    ]
  },
  {
    id: '2',
    title: 'المؤتمر العلمي الثاني للطلاب اليمنيين',
    date: '20/03/2024',
    description: 'المؤتمر العلمي الثاني للطلاب اليمنيين في ماليزيا، الذي تناول أحدث الأبحاث العلمية للطلاب اليمنيين في مختلف التخصصات',
    mainImage: '/assets/hero_section/img4.jpeg',
    images: [
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg'
    ]
  },
  {
    id: '3',
    title: 'حفل تكريم المتفوقين 2023',
    date: '05/12/2023',
    description: 'حفل تكريم الطلاب اليمنيين المتفوقين في الجامعات الماليزية للعام الدراسي 2023، بحضور السفير اليمني وعدد من المسؤولين',
    mainImage: '/assets/hero_section/img4.jpeg',
    images: [
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg'
    ]
  },
  {
    id: '4',
    title: 'الرحلة السياحية لجزيرة بينانج',
    date: '10/01/2024',
    description: 'الرحلة السياحية التي نظمها الاتحاد إلى جزيرة بينانج، وشارك فيها أكثر من 50 طالبًا وطالبة من مختلف الجامعات الماليزية',
    mainImage: '/assets/hero_section/img4.jpeg',
    images: [
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg'
    ]
  },
  {
    id: '5',
    title: 'الإفطار الرمضاني الكبير 2025',
    date: '10/03/2025',
    description: 'الرحلة السياحية التي نظمها الاتحاد إلى جزيرة بينانج، وشارك فيها أكثر من 50 طالبًا وطالبة من مختلف الجامعات الماليزية',
    mainImage: '/assets/hero_section/img4.jpeg',
    images: [
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg'
    ]
  },
  {
    id: '6',
    title: 'الإفطار الرمضاني الكبير 2025',
    date: '10/03/2025',
    description: 'الرحلة السياحية التي نظمها الاتحاد إلى جزيرة بينانج، وشارك فيها أكثر من 50 طالبًا وطالبة من مختلف الجامعات الماليزية',
    mainImage: '/assets/hero_section/img4.jpeg',
    images: [
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg',
      '/assets/hero_section/img4.jpeg'
    ]
  }
];