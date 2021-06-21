
import { HeroAddComponent } from './components/hero-add/hero-add.component';
import { HeroTopComponent } from './components/hero-top/hero-top.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'hero-top', pathMatch: 'full' },
  { path: 'hero-list', component: HeroListComponent },
  { path: 'hero-top', component: HeroTopComponent},
  { path: 'hero-detail/:id', component: HeroDetailComponent},
  { path: 'hero-add', component: HeroAddComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule  ]
})
export class AppRoutingModule { }
