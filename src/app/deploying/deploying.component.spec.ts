import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployingComponent } from './deploying.component';

describe('DeployingComponent', () => {
  let component: DeployingComponent;
  let fixture: ComponentFixture<DeployingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeployingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
