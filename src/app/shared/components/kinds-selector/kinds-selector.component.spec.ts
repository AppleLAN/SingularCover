import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { KindsSelectorComponent } from './kinds-selector.component';
import { AppModule } from '@src/app/app.module';

describe('KindsSelectorComponent', () => {
  let component: KindsSelectorComponent;
  let fixture: ComponentFixture<KindsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [KindsSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
