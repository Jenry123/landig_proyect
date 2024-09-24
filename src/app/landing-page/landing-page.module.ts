import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { InformationArtistComponent } from './information-artist/information-artist.component';
import { TopMusicComponent } from './top-music/top-music.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [MenuAppComponent, InformationArtistComponent, TopMusicComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MenuAppComponent,
    InformationArtistComponent,
    TopMusicComponent
  ]
})
export class LandingPageModule { }
