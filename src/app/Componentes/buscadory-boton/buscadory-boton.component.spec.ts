import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoryBotonComponent } from './buscadory-boton.component';

describe('BuscadoryBotonComponent', () => {
  let component: BuscadoryBotonComponent;
  let fixture: ComponentFixture<BuscadoryBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadoryBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadoryBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
