import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhytoBar } from './phyto-bar';

describe('PhytoBar', () => {
  let component: PhytoBar;
  let fixture: ComponentFixture<PhytoBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhytoBar],
    }).compileComponents();

    fixture = TestBed.createComponent(PhytoBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
