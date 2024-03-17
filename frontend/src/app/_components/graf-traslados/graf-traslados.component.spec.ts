import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafTrasladosComponent } from './graf-traslados.component';

describe('GrafTrasladosComponent', () => {
  let component: GrafTrasladosComponent;
  let fixture: ComponentFixture<GrafTrasladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrafTrasladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrafTrasladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
