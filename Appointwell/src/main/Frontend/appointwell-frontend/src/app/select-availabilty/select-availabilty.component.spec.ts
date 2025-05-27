import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAvailabiltyComponent } from './select-availabilty.component';

describe('SelectAvailabiltyComponent', () => {
  let component: SelectAvailabiltyComponent;
  let fixture: ComponentFixture<SelectAvailabiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAvailabiltyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectAvailabiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
