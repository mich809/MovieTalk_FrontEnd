import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';


//Here is where we create all of our routes and which Angular scans for avaiable routes.
// paths dont start with '/' and components dont go in quotes.
const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //This means that it is avaiable for the entire application
  exports: [RouterModule]
})
export class AppRoutingModule { }
