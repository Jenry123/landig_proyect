import { TopMusicComponent } from './landing-page/top-music/top-music.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationArtistComponent } from './landing-page/information-artist/information-artist.component';
import { MenuAppComponent } from './landing-page/menu-app/menu-app.component';
import { CardsComponent } from './landing-page/cards/cards.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';

const routes: Routes = [
  {path:'artist',component:InformationArtistComponent},
  {path:'home',component:MenuAppComponent},
  {path:'music',component:TopMusicComponent},
  {path:'cards',component:CardsComponent},
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
