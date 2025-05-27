import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSpecializationComponent } from './choose-specialization.component';

describe('ChooseSpecializationComponent', () => {
  let component: ChooseSpecializationComponent;
  let fixture: ComponentFixture<ChooseSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseSpecializationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
