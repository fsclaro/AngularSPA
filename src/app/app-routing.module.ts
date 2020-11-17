import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'background',
    component: BackgroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
