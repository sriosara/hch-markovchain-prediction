import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcamasComponent } from './mapcamas.component';

describe('MapcamasComponent', () => {
  let component: MapcamasComponent;
  let fixture: ComponentFixture<MapcamasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapcamasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapcamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
