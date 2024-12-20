import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitydetailComponent } from './entitydetail.component';

describe('EntitydetailComponent', () => {
  let component: EntitydetailComponent;
  let fixture: ComponentFixture<EntitydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntitydetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
