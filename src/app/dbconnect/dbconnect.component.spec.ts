import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbconnectComponent } from './dbconnect.component';

describe('DbconnectComponent', () => {
  let component: DbconnectComponent;
  let fixture: ComponentFixture<DbconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
