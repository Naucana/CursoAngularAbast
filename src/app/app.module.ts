import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comun/header/header.component';
import { LeftComponent } from './comun/left/left.component';
import { RightComponent } from './comun/right/right.component';
import { FooterComponent } from './comun/footer/footer.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizarPipe } from './comun/capitalizar.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    FooterComponent,
    PipesComponent,
    CapitalizarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
