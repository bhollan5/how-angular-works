import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectInjectionsComponent } from './direct-injections.component';

describe('DirectInjectionsComponent', () => {
  let component: DirectInjectionsComponent;
  let fixture: ComponentFixture<DirectInjectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectInjectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectInjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
