import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeComponent } from './theme';

describe('ThemeComponent', () => {
  let component: ThemeComponent;
  let fixture: ComponentFixture<ThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
