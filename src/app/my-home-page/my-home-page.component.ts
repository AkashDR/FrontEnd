import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { MyProductPageComponent } from '../my-product-page/my-product-page.component';


@Component({
  selector: 'app-my-home-page',
  templateUrl: './my-home-page.component.html',
  styleUrls: ['./my-home-page.component.css']
})

export class MyHomePageComponent implements OnInit {
  phoneNumber = "";
  mail = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  myFunc() {
    localStorage.setItem("mail", this.mail);
    localStorage.setItem("phoneNumber", this.phoneNumber);
    console.log("test");
    this.router.navigateByUrl('/product');
  }
}
