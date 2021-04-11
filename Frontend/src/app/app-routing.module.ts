import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MobilesComponent } from './mobiles/mobiles.component'
import { NewMobilesComponent } from './newmobiles/newmobiles.component';
import { LoginComponent } from './login/login.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/mobiles',
    pathMatch: 'full'
  },
  {
    path: 'mobiles',
    component: MobilesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: NewMobilesComponent,
  },
  {
    path: 'update',
    canActivate: [AuthGuard],
    component: AddReviewComponent
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuard],
    component: EditComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
