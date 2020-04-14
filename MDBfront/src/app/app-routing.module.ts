import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MDBGuard } from './guards/mdb.guard';
import { CardSearchComponent } from './mdb/card-search/card-search.component';


const routes: Routes = [

  //Default redirect
  {
     path: '',
     pathMatch: 'full',
     redirectTo: '/login'
  },

  //login route
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },

  //MDB module route
  {
    path: 'mdb/app',
    loadChildren: './mdb/mdb.module#MDBModule',
    canActivate: [MDBGuard],
    canLoad: [MDBGuard]
  },

  //Search route
  {
    path: 'mdb/search',
    component: CardSearchComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
