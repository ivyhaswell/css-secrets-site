import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { Chapter1Component } from './chapter1/chapter1.component';
import { CurrentColorComponent } from './chapter1/current-color/current-color.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { TransparentBorderComponent } from './chapter2/transparent-border/transparent-border.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MultiBordersComponent } from './chapter2/multi-borders/multi-borders.component';
import { ExtendedBgPositionComponent } from './chapter2/extended-bg-position/extended-bg-position.component';
import { HighlightCodeComponent } from './common/highlight-code/highlight-code.component';
import { InnerRoundingComponent } from './chapter2/inner-rounding/inner-rounding.component';
import { StripesBackgroundComponent } from './chapter2/stripes-background/stripes-background.component';
import { ComplexBackgroundPatternsComponent } from './chapter2/complex-background-patterns/complex-background-patterns.component';
import { PseudoRandomBackgroundsComponent } from './chapter2/pseudo-random-backgrounds/pseudo-random-backgrounds.component';
import { CubeContainerDirective } from './directives/cube-container.directive';
import { ContinuousImageBordersComponent } from './chapter2/continuous-image-borders/continuous-image-borders.component'

registerLocaleData(en);

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    less: () => import('highlight.js/lib/languages/less'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    Chapter1Component,
    CurrentColorComponent,
    Chapter2Component,
    TransparentBorderComponent,
    MultiBordersComponent,
    ExtendedBgPositionComponent,
    HighlightCodeComponent,
    InnerRoundingComponent,
    StripesBackgroundComponent,
    ComplexBackgroundPatternsComponent,
    PseudoRandomBackgroundsComponent,
    CubeContainerDirective,
    ContinuousImageBordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    HighlightModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HIGHLIGHT_OPTIONS, useValue: getHighlightLanguages() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
