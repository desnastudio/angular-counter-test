import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromStoreComponent } from './from-store.component';

describe('FromStoreComponent', () => {
  let component: FromStoreComponent;
  let fixture: ComponentFixture<FromStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
