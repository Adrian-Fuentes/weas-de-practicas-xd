import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonsUComponent } from './botons-u.component';

describe('BotonsUComponent', () => {
  let component: BotonsUComponent;
  let fixture: ComponentFixture<BotonsUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonsUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
