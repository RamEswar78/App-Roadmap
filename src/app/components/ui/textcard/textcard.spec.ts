import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textcard } from './textcard';

describe('Textcard', () => {
  let component: Textcard;
  let fixture: ComponentFixture<Textcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
