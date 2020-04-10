import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { SidebarComponent } from './sidebar.component';
import { AppModule } from '@src/app/app.module';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [SidebarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
