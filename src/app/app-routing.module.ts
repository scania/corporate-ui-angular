import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { InfopageComponent } from './info/infopage.component';
import { ContactComponent } from './contact/contact.component';
import { ContactpageComponent } from './contact/contactpage.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'info', 
    component: InfoComponent,
    children : [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: InfopageComponent
      },
    ]
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    children : [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ContactpageComponent
      },
    ]
  },
  { path: '404', component: NotfoundComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/404' }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
