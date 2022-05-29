import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePageComponent
  },

  {
    path:'',
    component: HomePageComponent
  },
  
  {
    path: 'home/prod_details/:id',
    component: ProdDetailsComponent
  },

  {
    path: 'home/prod_details/prof/:id',
    component: ProdDetailsComponent
  },
  {
    path: 'home/prod_details/advert/:id',
    component: ProdDetailsComponent
  },
  {
    path: 'home/prod_details/best/:id',
    component: ProdDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
