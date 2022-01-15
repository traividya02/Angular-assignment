import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachdataComponent } from './eachdata.component';

describe('EachdataComponent', () => {
  let component: EachdataComponent;
  let fixture: ComponentFixture<EachdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
