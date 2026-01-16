import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxKinepolisRedesignPage } from './ui-ux-kinepolis-redesign-page';

describe('UiUxKinepolisRedesignPage', () => {
  let component: UiUxKinepolisRedesignPage;
  let fixture: ComponentFixture<UiUxKinepolisRedesignPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUxKinepolisRedesignPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxKinepolisRedesignPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
