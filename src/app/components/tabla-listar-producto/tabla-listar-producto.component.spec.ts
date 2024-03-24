import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListarProductoComponent } from './tabla-listar-producto.component';

describe('TablaListarProductoComponent', () => {
  let component: TablaListarProductoComponent;
  let fixture: ComponentFixture<TablaListarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaListarProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaListarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
