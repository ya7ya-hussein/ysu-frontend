// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// Import all page components
import { HomeComponent } from './pages/home/home.component';
import { StudentGuideComponent } from './pages/student-guide/student-guide.component';
import { UniversitiesComponent } from './pages/universities/universities.component';
import { NewsComponent } from './pages/news/news.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UniversityDetailComponent } from './pages/university-detail/university-detail.component';
import { GalleryDetailComponent } from './pages/gallery-detail/gallery-detail.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { BranchDetailComponent } from './pages/branch-detail/branch-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'student-guide', component: StudentGuideComponent },
      { path: 'universities', component: UniversitiesComponent },
      { path: 'universities/:id', component: UniversityDetailComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsDetailComponent },
      { path: 'branches', component: BranchesComponent },
      { path: 'branches/:id', component: BranchDetailComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'gallery/:id', component: GalleryDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];