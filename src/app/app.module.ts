import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBarComponent } from './_layout/login-bar/login-bar.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from './users/users.component';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons'
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';  
import{ jqxWindowComponent, jqxWindowModule } from 'jqwidgets-ng/jqxwindow';   
import{ jqxListBoxComponent, jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';     
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { EmailsentComponent } from './emailsent/emailsent.component';    

@NgModule({
  declarations: [
    AppComponent,
    LoginBarComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    HomeComponent,
    SignupComponent,
    AccountComponent,
    UsersComponent,
    EmailsentComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    jqxGridModule,
    jqxButtonModule,
    jqxCheckBoxModule,
    jqxWindowModule,
    jqxListBoxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
