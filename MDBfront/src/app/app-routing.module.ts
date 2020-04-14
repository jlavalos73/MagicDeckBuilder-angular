import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MDBGuard } from './guards/mdb.guard';
import { RegisterComponent } from './register/register.component';


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

  //register route
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },

  //MDB module route
  {
    path: 'mdb/app',
    loadChildren: './mdb/mdb.module#MDBModule',
    canActivate: [MDBGuard],
    canLoad: [MDBGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
