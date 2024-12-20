import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJsonComponent } from './detail-json.component';

describe('DetailJsonComponent', () => {
  let component: DetailJsonComponent;
  let fixture: ComponentFixture<DetailJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
