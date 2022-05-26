import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoggedInAuthGuard } from './guard/auth-guard-logged-in.guard';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    
    canActivate: [LoggedInAuthGuard]
  },
  {
    path: 'profile',
    component: PerfilComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'create-file',
    component: CreateFileComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
