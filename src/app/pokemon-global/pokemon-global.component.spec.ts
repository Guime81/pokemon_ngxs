import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGlobalComponent } from './pokemon-global.component';

describe('PokemonGlobalComponent', () => {
  let component: PokemonGlobalComponent;
  let fixture: ComponentFixture<PokemonGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
