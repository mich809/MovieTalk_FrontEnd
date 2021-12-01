import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './Components/community/community.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MainComponent } from './Components/main/main.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SearchComponent } from './Components/search/search.component';


//Here is where we create all of our routes and which Angular scans for avaiable routes.
// paths dont start with '/' and components dont go in quotes.
const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path: 'main',
    component: MainComponent,
    children:[
      {
        path:'home',
        component: HomeComponent

      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'community',
        component: CommunityComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //This means that it is avaiable for the entire application
  exports: [RouterModule]
})
export class AppRoutingModule { }
