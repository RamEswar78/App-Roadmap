import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Middlebar } from './middlebar';

describe('Middlebar', () => {
  let component: Middlebar;
  let fixture: ComponentFixture<Middlebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Middlebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Middlebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
