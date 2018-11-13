import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayListComponent } from './core/pages/playList';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: PlayListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
