import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { InformationArtistComponent } from './information-artist/information-artist.component';
import { TopMusicComponent } from './top-music/top-music.component';



@NgModule({
  declarations: [MenuAppComponent, InformationArtistComponent, TopMusicComponent],
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
