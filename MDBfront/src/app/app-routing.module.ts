import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MDBGuard } from './guards/mdb.guard';
import { CardSearchComponent } from './mdb/card-search/card-search.component';
import { RegisterComponent } from './register/register.component';
import { MdbModule } from './mdb/mdb.module';


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
    loadChildren: ()=> MdbModule,
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
