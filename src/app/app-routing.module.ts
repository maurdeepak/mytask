import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './user/add/add.component';
import { UpdateComponent } from './user/update/update.component';
import { ListComponent } from './user/list/list.component';
import { EditComponent } from './user/edit/edit.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'list', component: ListComponent },
  {path:'edit/:id',component:EditComponent},
   { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
