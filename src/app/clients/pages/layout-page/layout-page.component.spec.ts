/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayoutPageComponent } from './layout-page.component';

describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
