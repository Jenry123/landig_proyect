import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationArtistComponent } from './information-artist.component';

describe('InformationArtistComponent', () => {
  let component: InformationArtistComponent;
  let fixture: ComponentFixture<InformationArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
