import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { HomeComponent } from './home/home.component';
import { BackgroundComponent } from './background/background.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackgroundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    HttpClientModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
