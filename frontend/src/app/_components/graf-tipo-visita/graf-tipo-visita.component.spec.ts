import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafTipoVisitaComponent } from './graf-tipo-visita.component';

describe('GrafTipoVisitaComponent', () => {
  let component: GrafTipoVisitaComponent;
  let fixture: ComponentFixture<GrafTipoVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrafTipoVisitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrafTipoVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
