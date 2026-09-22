import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadDocumentos } from './upload-documentos';

describe('UploadDocumentos', () => {
  let component: UploadDocumentos;
  let fixture: ComponentFixture<UploadDocumentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDocumentos],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadDocumentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
