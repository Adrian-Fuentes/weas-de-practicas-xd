import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsComponent } from './tabla-us.component';

describe('TablaUsComponent', () => {
  let component: TablaUsComponent;
  let fixture: ComponentFixture<TablaUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
