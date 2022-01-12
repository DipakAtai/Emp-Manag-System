import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [

  { path: 'form', component: FormComponent },
  { path: 'emp-list', component: EmpListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
