import { DriverServiceMock } from './../mock/driver.service.mock';
import { DriverService } from './../driver.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({    
      imports: [HttpClientModule],
      providers: [DriverService,
        {provide: MatDialogRef, useValue: {}},
        {provide: MatDialog, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: [] },
        {provide: DriverService, useClass: DriverServiceMock}
      ],
      declarations: [ ListComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ListComponent);
      fixture.detectChanges();

      component = fixture.componentInstance; 
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one driver', () => {
    expect(component.drivers.length).toEqual(1)
  })
});
