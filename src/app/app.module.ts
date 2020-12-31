import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ResourcesModule } from './resources/resources.module';

import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';
import { DepartmentsComponent } from './departments/departments/departments.component';


// const rootRouting: ModuleWithProviders =RouterModule.forRoot([], { useHash: false });



@NgModule({
  declarations: [ AppComponent, FooterComponent, HeaderComponent, DepartmentsComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    AboutModule,
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
