import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPopComponent } from './reg-pop.component';

describe('RegPopComponent', () => {
  let component: RegPopComponent;
  let fixture: ComponentFixture<RegPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
