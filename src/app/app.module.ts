import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { DropdownModule } from 'angular-dropdown-component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { InfopageComponent } from './info/infopage.component';
import { ContactComponent } from './contact/contact.component';
import { ContactpageComponent } from './contact/contactpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ContactComponent,
    ContactpageComponent,
    NavigationComponent,
    NotfoundComponent,
    InfopageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
