import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaComponent } from './mahasiswa.component';

describe('MahasiswaComponent', () => {
  let component: MahasiswaComponent;
  let fixture: ComponentFixture<MahasiswaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MahasiswaComponent],
    });
    fixture = TestBed.createComponent(MahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
