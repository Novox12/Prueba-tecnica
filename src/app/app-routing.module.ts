import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackComponent} from './component/back/back.component';

const routes: Routes = [
  {path: 'potst', component: BackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
