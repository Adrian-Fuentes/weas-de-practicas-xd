import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloyEncierroComponent } from './tituloy-encierro.component';

describe('TituloyEncierroComponent', () => {
  let component: TituloyEncierroComponent;
  let fixture: ComponentFixture<TituloyEncierroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloyEncierroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloyEncierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
