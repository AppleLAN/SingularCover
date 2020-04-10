import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '@src/app/app.module';
import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { TableFilterContainerComponent } from './table-filter-container.component';

describe('TableFilterContainerComponent', () => {
  let component: TableFilterContainerComponent;
  let fixture: ComponentFixture<TableFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [TableFilterContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
