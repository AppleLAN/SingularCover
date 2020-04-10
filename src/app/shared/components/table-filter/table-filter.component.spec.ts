import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '@src/app/app.module';
import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { TableFilterComponent } from './table-filter.component';

describe('TableFilterComponent', () => {
  let component: TableFilterComponent;
  let fixture: ComponentFixture<TableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [TableFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
