import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';

//Here is where we create all of our routes and which Angular scans for avaiable routes.
// paths dont start with '/' and components dont go in quotes.
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //This means that it is avaiable for the entire application
  exports: [RouterModule]
})
export class AppRoutingModule { }
