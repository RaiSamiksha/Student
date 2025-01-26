import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountLettersComponent } from './count-letters.component';

describe('CountLettersComponent', () => {
  let component: CountLettersComponent;
  let fixture: ComponentFixture<CountLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountLettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
