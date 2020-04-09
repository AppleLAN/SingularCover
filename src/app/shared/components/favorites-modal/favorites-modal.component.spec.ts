import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesModalComponent } from './favorites-modal.component';

describe('FavoritesModalComponent', () => {
  let component: FavoritesModalComponent;
  let fixture: ComponentFixture<FavoritesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
