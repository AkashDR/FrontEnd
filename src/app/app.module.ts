import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, } from './app-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyProductPageComponent } from './my-product-page/my-product-page.component';
import { MyHomePageComponent } from './my-home-page/my-home-page.component';

const appRoutes: Routes = [
  { path: '', component: MyHomePageComponent },
  { path: 'product', component: MyProductPageComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MyProductPageComponent,
    MyHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
