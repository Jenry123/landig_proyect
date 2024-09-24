import { TopMusicComponent } from './landing-page/top-music/top-music.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationArtistComponent } from './landing-page/information-artist/information-artist.component';
import { MenuAppComponent } from './landing-page/menu-app/menu-app.component';

const routes: Routes = [
  {path:'artist',component:InformationArtistComponent},
  {path:'home',component:MenuAppComponent},
  {path:'music',component:TopMusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
