import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductPageComponent } from './my-product-page.component';

describe('MyProductPageComponent', () => {
  let component: MyProductPageComponent;
  let fixture: ComponentFixture<MyProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
