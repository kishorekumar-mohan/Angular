import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJsonComponent } from './list-json.component';

describe('ListJsonComponent', () => {
  let component: ListJsonComponent;
  let fixture: ComponentFixture<ListJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
