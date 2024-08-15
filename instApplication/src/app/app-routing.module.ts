import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"login",loadChildren:() => import("./auth/auth.module").
    then(m=>m.AuthModule)
  },
  {
    path:"post",loadChildren:()=>import("./post/post.module").then(m=>m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
