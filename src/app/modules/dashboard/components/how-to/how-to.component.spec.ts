import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardModule } from '../../dashboard.module';
import { HowToComponent } from './how-to.component';

describe('HowToComponent', () => {
  let component: HowToComponent;
  let fixture: ComponentFixture<HowToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule],
      declarations: [HowToComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
