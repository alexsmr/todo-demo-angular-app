import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUiComponent } from '../ui/app-ui.component';

describe('AppUiComponent', () => {
  let component: AppUiComponent;
  let fixture: ComponentFixture<AppUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
