import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BackComponent } from './component/back/back.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { PopularComponent } from './component/popular/popular.component';
import { RecentComponent } from './component/recent/recent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackComponent,
    FavoritesComponent,
    PopularComponent,
    RecentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
