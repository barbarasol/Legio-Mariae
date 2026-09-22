import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Afiliacao } from './afiliacao';

describe('Afiliacao', () => {
  let component: Afiliacao;
  let fixture: ComponentFixture<Afiliacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Afiliacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Afiliacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
