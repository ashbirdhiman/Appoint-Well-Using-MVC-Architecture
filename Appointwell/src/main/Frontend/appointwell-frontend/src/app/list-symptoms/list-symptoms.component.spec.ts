import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSymptomsComponent } from './list-symptoms.component';

describe('ListSymptomsComponent', () => {
  let component: ListSymptomsComponent;
  let fixture: ComponentFixture<ListSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSymptomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
