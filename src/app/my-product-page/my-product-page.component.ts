import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-my-product-page',
  templateUrl: './my-product-page.component.html',
  styleUrls: ['./my-product-page.component.css']
})
export class MyProductPageComponent implements OnInit {

  panelExpanded1 = false;
  panelExpanded2 = false;
  panelExpanded3 = false;
  remarks1 = "";
  remarks2 = "";
  remarks3 = "";
  reremarks1 = "";
  reremarks2 = "";
  reremarks3 = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getSavedForm();
  }

  submitForm() {
    localStorage.setItem("remarks1", this.remarks1);
    localStorage.setItem("remarks2", this.remarks2);
    localStorage.setItem("remarks3", this.remarks3);
  }

  getSavedForm() {
    console.log(this.remarks1);
    this.reremarks1 = localStorage.getItem("remarks1");
    this.reremarks2 = localStorage.getItem("remarks2");
    this.reremarks3 = localStorage.getItem("remarks3");
  }

}
