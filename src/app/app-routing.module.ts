import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { FoodModule } from './food/food.module';
import { FormAddComponent } from './form-add/form-add.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // si no le agregro pathMath: 'full' se cre un loop infinito
  {path: 'login', component: LoginComponent},
  {path: 'form/:id', component: FormAddComponent},
  {path: 'home', component: HomeComponent},
  {path: 'food/:type/:id', component: FoodComponent
  // loadChildren:()=>import('./food/food.module').then(m=>m.FoodModule)
  },
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
