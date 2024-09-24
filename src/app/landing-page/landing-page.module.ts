import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { InformationArtistComponent } from './information-artist/information-artist.component';
import { TopMusicComponent } from './top-music/top-music.component';
import { CardsComponent } from './cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [MenuAppComponent, InformationArtistComponent, TopMusicComponent, CardsComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MenuAppComponent,
    InformationArtistComponent,
    TopMusicComponent,
    NavbarComponent
  ]
})
export class LandingPageModule { }
