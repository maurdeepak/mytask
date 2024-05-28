import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './user/add/add.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './user/list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditComponent } from './user/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
  AddComponent,
  ListComponent,
  NavbarComponent,
  SidebarComponent,
  EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
