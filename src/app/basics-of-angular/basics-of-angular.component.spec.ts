import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsOfAngularComponent } from './basics-of-angular.component';

describe('BasicsOfAngularComponent', () => {
  let component: BasicsOfAngularComponent;
  let fixture: ComponentFixture<BasicsOfAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsOfAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsOfAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
