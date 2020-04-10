import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '@src/app/app.module';
import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { CenteredContainerComponent } from './centered-container.component';

describe('CenteredContainerComponent', () => {
  let component: CenteredContainerComponent;
  let fixture: ComponentFixture<CenteredContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CenteredContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
