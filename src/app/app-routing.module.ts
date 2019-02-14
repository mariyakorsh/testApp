import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientCardComponent } from './components/client-card/client-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientlist', pathMatch: 'full' },
  { path: 'clientlist', component: ClientListComponent },
  { path: 'client', component: ClientCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
