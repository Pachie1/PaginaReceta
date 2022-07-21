import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'food/:type/:id',component: FoodComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FoodModule { }
