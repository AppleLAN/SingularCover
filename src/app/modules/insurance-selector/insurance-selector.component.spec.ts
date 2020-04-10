import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceSelectorComponent } from './insurance-selector.component';
import { InsuranceSelectorModule } from './insurance-selector.module';
import { AppModule } from '@src/app/app.module';

describe('InsuranceSelectorComponent', () => {
  let component: InsuranceSelectorComponent;
  let fixture: ComponentFixture<InsuranceSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, InsuranceSelectorModule],
      declarations: [InsuranceSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
