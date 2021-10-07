import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserPanelComponent } from './delete-user-panel.component';

describe('DeleteUserPanelComponent', () => {
  let component: DeleteUserPanelComponent;
  let fixture: ComponentFixture<DeleteUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
