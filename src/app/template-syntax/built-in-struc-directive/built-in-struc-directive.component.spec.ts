import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInStrucDirectiveComponent } from './built-in-struc-directive.component';

describe('BuiltInStrucDirectiveComponent', () => {
  let component: BuiltInStrucDirectiveComponent;
  let fixture: ComponentFixture<BuiltInStrucDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInStrucDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInStrucDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
