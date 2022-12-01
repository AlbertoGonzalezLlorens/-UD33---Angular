import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UD33ComponenteComponent } from './ud33-componente.component';

describe('UD33ComponenteComponent', () => {
  let component: UD33ComponenteComponent;
  let fixture: ComponentFixture<UD33ComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UD33ComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UD33ComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
