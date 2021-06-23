import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';

import { ContactResolverService } from './services/contact-resolver-service.service';

import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [

  {
    path: 'contacts/edit/:id', component: ContactEditPageComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [AuthGuard],
  },

  {
    path: 'contacts/add', component: ContactEditPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'contacts/:id', component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [AuthGuard],
  },

  {
    path: 'signup', component: SignUpComponent,
  },

  {
    path: 'contacts', component: ContactPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'statistics', component: StatisticPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: '', component: BitcoinAppComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
