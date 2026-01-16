import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePage } from './about-me-page';

describe('AboutMePage', () => {
  let component: AboutMePage;
  let fixture: ComponentFixture<AboutMePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
