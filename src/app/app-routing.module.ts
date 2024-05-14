import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { LoginBarComponent } from './_layout/login-bar/login-bar.component';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'glavna', component: GlavnaComponent }
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      // { path: '', component: GlavnaComponent, pathMatch: 'full'},
      // { path: 'glavna', component: GlavnaComponent },
      { path: 'home', component: HomeComponent },
      { path: 'account', component: AccountComponent },
      { path: 'users', component: UsersComponent },
      { path: 'signup', component: SignupComponent },
      // { path: 'notlogged', component: NotloggedComponent },
      // { path: 'liststudents2', component: Liststudents2Component },
      // { path: 'paging', component: PagingComponent },
      // { path: 'tstudent', component: TstudentComponent },
      // { path: 'tstudent2', component: Tstudent2Component },
      // { path: 'ngfor', component: NgforComponent },
      // { path: 'ngxscrolling', component: NgxscrollingComponent },
      // { path: 'ngxvirtpage', component: NgxvirtpageComponent },
      // { path: 'ngxvirtpage3', component: Ngxvirtpage3Component },
      // { path: '', component: LayoutComponent,
      //   children: [
      //     { path: '', component: NovakComponent, pathMatch: 'full'},
      //     { path: 'novak', component: NovakComponent },
      //     { path: 'ariana', component: ArianaComponent },
      //     { path: 'federer', component: FedererComponent },
      //     { path: 'nadal', component: NadalComponent }
      //   ]
      // },
      // { path: 'about0', component: About0Component },
      // { path: 'sajtsearch', component: SajtsearchComponent },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
