import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { InsuranceTableComponent } from './insurance-table.component';
import { AppModule } from '@src/app/app.module';

describe('InsuranceTableComponent', () => {
  let component: InsuranceTableComponent;
  let fixture: ComponentFixture<InsuranceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [InsuranceTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
