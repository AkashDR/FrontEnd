import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomePageComponent } from './my-home-page/my-home-page.component';
import { MyProductPageComponent } from './my-product-page/my-product-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MyHomePageComponent },
  { path: 'product', component: MyProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
