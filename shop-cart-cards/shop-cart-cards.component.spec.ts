import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartCardsComponent } from './shop-cart-cards.component';

describe('ShopCartCardsComponent', () => {
  let component: ShopCartCardsComponent;
  let fixture: ComponentFixture<ShopCartCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCartCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCartCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
