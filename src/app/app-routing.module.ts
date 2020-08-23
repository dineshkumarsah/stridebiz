import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ex2Component } from './ex2/ex2.component';
import {HttpClientModule} from '@angular/common/http'
import { Ex3Component } from './ex3/ex3.component';


const routes: Routes = [
  {path:'ex2',component:Ex2Component},
  {path:'ex3',component:Ex3Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
