import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarTransferComponent } from './daftar-transfer.component';

describe('DaftarTransferComponent', () => {
  let component: DaftarTransferComponent;
  let fixture: ComponentFixture<DaftarTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
