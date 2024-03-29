import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LeaveComponent } from './leave/leave.component';
import { TimeComponent } from './time/time.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TempPasswordComponent } from './temp-password/temp-password.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: ProfileComponent,
    path: 'profile'
  },
  {
    component: AddUserComponent,
    path: 'adduser'
  },
  {
    component: LeaveComponent,
    path: 'leave'
  },
  {
    component: TimeComponent,
    path: 'time'
  },
  {
    component: MyInfoComponent,
    path: 'myinfo'
  },
  {
    component: EditUserComponent,
    path: 'edit-user/:uId'
  },
  {
    component: ResetPasswordComponent,
    path: 'reset'
  },
  {
    component: TempPasswordComponent,
    path: 'changeTempPassword'
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
