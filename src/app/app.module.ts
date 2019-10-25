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
import { DirectivasComponent } from './components/directivas/directivas.component';
import { AppResaltadoDirective } from './components/directivas/app-resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { APP_ROUTING } from './app.routing';
import { MultipleComponent } from './components/multiple/multiple.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    FooterComponent,
    PipesComponent,
    CapitalizarPipe,
    DirectivasComponent,
    AppResaltadoDirective,
    NgSwitchComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
