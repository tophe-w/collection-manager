import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionItemCardComponent } from './collection-item-card.component';

describe('CollectionItemCardComponent', () => {
  let component: CollectionItemCardComponent;
  let fixture: ComponentFixture<CollectionItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionItemCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
