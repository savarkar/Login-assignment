import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'login',
  },
{
  path:"login",
  component:LoginComponent
},
{
  path:"dashboard",
  component:DashboardComponent,
  canActivate: [AuthGaurdService]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
