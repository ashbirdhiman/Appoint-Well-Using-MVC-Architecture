import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditWalkInComponent } from './view-edit-walk-in.component';

describe('ViewEditWalkInComponent', () => {
  let component: ViewEditWalkInComponent;
  let fixture: ComponentFixture<ViewEditWalkInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEditWalkInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEditWalkInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
