import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MDBGuard } from './guards/mdb.guard';
import { CardSearchComponent } from './card-search/card-search.component';
import { RegisterComponent } from './register/register.component';
import { MdbComponent } from './mdb/mdb.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  // Default redirect to login
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },

  // login route
  {
    path: 'login',
    component: LoginComponent,
  },

  // register route
  {
    path: 'register',
    component: RegisterComponent,
  },

  // MDB module route
  {
    path: 'mdb',
    component: MdbComponent,
    canActivate: [AuthGuard]
  },

  // MDB module route
  {
    path: 'mdb/user/profile',
    component: ProfileComponent,
  },

  // Search route
  {
    path: 'mdb/search',
    component: CardSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
