import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MauiWasteSortingAppPage } from './maui-waste-sorting-app-page';

describe('MauiWasteSortingAppPage', () => {
  let component: MauiWasteSortingAppPage;
  let fixture: ComponentFixture<MauiWasteSortingAppPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MauiWasteSortingAppPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MauiWasteSortingAppPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
