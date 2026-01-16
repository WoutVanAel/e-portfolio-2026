import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterAnimalArGamePage } from './flutter-animal-ar-game-page';

describe('FlutterAnimalArGamePage', () => {
  let component: FlutterAnimalArGamePage;
  let fixture: ComponentFixture<FlutterAnimalArGamePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlutterAnimalArGamePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlutterAnimalArGamePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
