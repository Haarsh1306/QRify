import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodeComponent } from './qr-code.component';

describe('QrCodeComponent', () => {
  let component: QRCodeComponent;
  let fixture: ComponentFixture<QRCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QRCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QRCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
