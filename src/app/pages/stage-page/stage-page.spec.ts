import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePage } from './stage-page';

describe('StagePage', () => {
  let component: StagePage;
  let fixture: ComponentFixture<StagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
