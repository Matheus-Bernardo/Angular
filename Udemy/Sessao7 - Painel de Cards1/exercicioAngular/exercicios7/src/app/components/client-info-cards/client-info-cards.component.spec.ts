import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoCardsComponent } from './client-info-cards.component';

describe('ClientInfoCardsComponent', () => {
  let component: ClientInfoCardsComponent;
  let fixture: ComponentFixture<ClientInfoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientInfoCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInfoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
