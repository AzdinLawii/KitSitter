import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SitterProfileComponent} from './sitter-profile/sitter-profile.component';
import {SearchComponent} from './search/search.component';
import {CalendarComponent} from './calendar/calendar.component';

import {registerLocaleData} from '@angular/common';
import LocalFr from '@angular/common/locales/fr';
import LocalFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(LocalFr, 'fr-FR', LocalFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SitterProfileComponent,
    SearchComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavComponent, FooterComponent]
})
export class AppModule {
}
