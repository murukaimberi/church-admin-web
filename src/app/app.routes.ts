import { Routes } from '@angular/router';
import {HomeComponent} from "./components/main/home/home.component";
import {UserDetailComponent} from "./components/user/user-detail/user-detail.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: UserDetailComponent
  }
];
