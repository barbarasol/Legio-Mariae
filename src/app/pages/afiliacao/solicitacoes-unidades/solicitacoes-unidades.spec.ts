import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacoesUnidades } from './solicitacoes-unidades';

describe('SolicitacoesUnidades', () => {
  let component: SolicitacoesUnidades;
  let fixture: ComponentFixture<SolicitacoesUnidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacoesUnidades],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacoesUnidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
