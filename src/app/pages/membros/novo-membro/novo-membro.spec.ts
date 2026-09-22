import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoMembro } from './novo-membro';

describe('NovoMembro', () => {
  let component: NovoMembro;
  let fixture: ComponentFixture<NovoMembro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoMembro],
    }).compileComponents();

    fixture = TestBed.createComponent(NovoMembro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
