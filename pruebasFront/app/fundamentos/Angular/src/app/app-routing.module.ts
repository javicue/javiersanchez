import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//where
{ path: 'contactos', children: [
  { path: '', component: ContactosListComponent},
  { path: 'add', component: ContactosAddComponent},
  { path: ':id/edit', component: ContactosEditComponent},
  { path: ':id', component: ContactosViewComponent},
  { path: ':id/:kk', component: ContactosViewComponent},
  ]},
