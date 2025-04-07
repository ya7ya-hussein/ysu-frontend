// src/app/data/universities-data.ts

import { University } from '../models/university.model';

export const UNIVERSITIES: University[] = [
  {
    id: 'um',
    name: 'Universiti Malaya (UM)',
    description: 'جامعة مالايا هي أقدم الجامعات الماليزية وأعرقها، تأسست عام 1905. وهي تُصنف ضمن أفضل 100 جامعة على مستوى العالم في العديد من التصنيفات الأكاديمية. تقع الجامعة في العاصمة كوالالمبور وتوفر مجموعة واسعة من البرامج الأكاديمية المتميزة.',
    location: 'كوالالمبور',
    type: 'حكومية',
    tuitionFee: 11000,
    courses: ['الطب', 'الهندسة', 'العلوم', 'الاقتصاد', 'تكنولوجيا المعلومات'],
    language: ['إنجليزي', 'ملايو'],
    hasUnionBranch: true,
    logo: 'assets/universities/um.png'
  },
  {
    id: 'iium',
    name: 'International Islamic University Malaysia (IIUM)',
    description: 'الجامعة الإسلامية العالمية بماليزيا هي مؤسسة أكاديمية إسلامية دولية تأسست عام 1983. تهدف الجامعة إلى دمج المعرفة الإسلامية بالعلوم الحديثة، وتستقطب الطلاب من جميع أنحاء العالم الإسلامي. تقع الجامعة في قومباك بالقرب من كوالالمبور.',
    location: 'قومباك',
    type: 'حكومية',
    tuitionFee: 9500,
    courses: ['الطب', 'الهندسة', 'الاقتصاد الإسلامي', 'القانون', 'الدراسات الإسلامية'],
    language: ['إنجليزي', 'عربي'],
    hasUnionBranch: true,
    logo: 'assets/universities/iium.png'
  },
  {
    id: 'upm',
    name: 'Universiti Putra Malaysia (UPM)',
    description: 'جامعة بوترا الماليزية هي جامعة أبحاث عامة مقرها سيردانج، سيلانجور. تأسست في عام 1931 كمدرسة زراعية، وتطورت لتصبح واحدة من أفضل الجامعات في ماليزيا. تشتهر الجامعة بتخصصاتها في مجالات الزراعة والعلوم البيولوجية والهندسية.',
    location: 'سيردانج، سيلانجور',
    type: 'حكومية',
    tuitionFee: 10000,
    courses: ['الزراعة', 'الطب البيطري', 'الهندسة', 'العلوم البيئية', 'تقنية المعلومات'],
    language: ['إنجليزي', 'ملايو'],
    hasUnionBranch: false,
    logo: 'assets/universities/upm.webp'
  },
  {
    id: 'apu',
    name: 'Asia Pacific University (APU)',
    description: 'جامعة آسيا باسيفيك للتكنولوجيا هي جامعة خاصة تأسست عام 1993 وتقع في كوالالمبور. تشتهر بتخصصاتها في مجالات تكنولوجيا المعلومات والحوسبة والهندسة والأعمال. تتميز الجامعة بعلاقاتها القوية مع شركات التكنولوجيا العالمية وفرص التدريب العملي.',
    location: 'كوالالمبور',
    type: 'خاصة',
    tuitionFee: 18000,
    courses: ['علوم الحاسوب', 'هندسة البرمجيات', 'الذكاء الاصطناعي', 'إدارة الأعمال', 'الأمن السيبراني'],
    language: ['إنجليزي'],
    hasUnionBranch: true,
    logo: 'assets/universities/apu.png'
  },
  {
    id: 'msu',
    name: 'Management and Science University (MSU)',
    description: 'جامعة العلوم الماليزية هي جامعة خاصة تأسست عام 1981 في شاه علم، سيلانجور. تقدم الجامعة مجموعة متنوعة من البرامج في مجالات الصحة والطب والعلوم والإدارة. تتميز بمرافقها الحديثة وبيئتها التعليمية المتكاملة التي تشجع الابتكار والإبداع.',
    location: 'شاه علم، سيلانجور',
    type: 'خاصة',
    tuitionFee: 16500,
    courses: ['العلوم الصحية', 'الصيدلة', 'الطب', 'إدارة الضيافة', 'تصميم الأزياء'],
    language: ['إنجليزي'],
    hasUnionBranch: false,
    logo: 'assets/universities/msu.png'
  },
  {
    id: 'utm',
    name: 'Universiti Teknologi Malaysia (UTM)',
    description: 'جامعة التكنولوجيا الماليزية هي جامعة حكومية تأسست عام 1904 وتقع في جوهور. تعتبر واحدة من أقدم وأهم الجامعات التقنية في ماليزيا. تشتهر بتخصصاتها الهندسية والتقنية المتقدمة وبرامج البحث العلمي المتميزة.',
    location: 'جوهور',
    type: 'حكومية',
    tuitionFee: 10500,
    courses: ['الهندسة المدنية', 'الهندسة الميكانيكية', 'الهندسة الكهربائية', 'العمارة', 'علوم الحاسوب'],
    language: ['إنجليزي', 'ملايو'],
    hasUnionBranch: true,
    logo: 'assets/universities/utm.png'
  }
];