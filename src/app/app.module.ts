import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ResourcesModule } from './resources/resources.module';
import { DepartmentsModule } from './departments/departments.module';


import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';
import { AlumniComponent } from './alumni/alumni/alumni.component';
import { TeachersComponent } from './teachers/teachers/teachers.component';
import { TeachersModule } from './teachers/teachers.module';
import { AlumniModule } from './alumni/alumni.module';


// const rootRouting: ModuleWithProviders =RouterModule.forRoot([], { useHash: false });



@NgModule({
  declarations: [ AppComponent, FooterComponent, HeaderComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AboutModule,
    DepartmentsModule,
    TeachersModule,
    AlumniModule,
    ContactModule,
    ResourcesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // rootRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
