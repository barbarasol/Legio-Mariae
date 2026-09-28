import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaUnidade } from './nova-unidade';

describe('NovaUnidade', () => {
  let component: NovaUnidade;
  let fixture: ComponentFixture<NovaUnidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaUnidade],
    }).compileComponents();

    fixture = TestBed.createComponent(NovaUnidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
