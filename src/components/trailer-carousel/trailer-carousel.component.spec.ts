import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerCarouselComponent } from './trailer-carousel.component';

describe('TrailerCarouselComponent', () => {
  let component: TrailerCarouselComponent;
  let fixture: ComponentFixture<TrailerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailerCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test trustUrl', () => {
    spyOn(component, 'trustUrl').and.callThrough();
    component.trustUrl('1');
    expect(component.trustUrl).toHaveBeenCalled();
  });
});
