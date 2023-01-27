
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PageRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [

  { path: '',  redirectTo:'/login' ,  pathMatch: 'full' },
  { path: '**',  component: NotpagefoundComponent, pathMatch: 'full' },
]
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PageRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
