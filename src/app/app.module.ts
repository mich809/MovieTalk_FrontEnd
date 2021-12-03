import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms'
import { RegisterComponent } from './Components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './Components/profile/profile.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SearchComponent } from './Components/search/search.component';
import { CommunityComponent } from './Components/community/community.component';
import { MovieCardComponent } from './Components/movie-card/movie-card.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout/flex';
import { MainComponent } from './Components/main/main.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './Components/movie-details/movie.component';


 
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    LandingPageComponent,
    SearchComponent,
    CommunityComponent,
    MovieCardComponent,
    MainComponent,
    MovieComponent
  
  


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
