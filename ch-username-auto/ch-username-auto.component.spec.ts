import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChUsernameAutoComponent } from './ch-username-auto.component';

describe('ChUsernameAutoComponent', () => {
  let component: ChUsernameAutoComponent;
  let fixture: ComponentFixture<ChUsernameAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChUsernameAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChUsernameAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
