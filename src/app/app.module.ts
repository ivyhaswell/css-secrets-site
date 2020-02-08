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
import { ContinuousImageBordersComponent } from './chapter2/continuous-image-borders/continuous-image-borders.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { FlexibleEllipsesComponent } from './chapter3/flexible-ellipses/flexible-ellipses.component';
import { ParallelogramsComponent } from './chapter3/parallelograms/parallelograms.component';
import { DiamondImagesComponent } from './chapter3/diamond-images/diamond-images.component';
import { CutoutCornersComponent } from './chapter3/cutout-corners/cutout-corners.component';
import { TrapezoidTabsComponent } from './chapter3/trapezoid-tabs/trapezoid-tabs.component';
import { SimplePieChartsComponent } from './chapter3/simple-pie-charts/simple-pie-charts.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { OneSidedShadowsComponent } from './chapter4/one-sided-shadows/one-sided-shadows.component';
import { IrregularDropShadowsComponent } from './chapter4/irregular-drop-shadows/irregular-drop-shadows.component';
import { ColorTintingComponent } from './chapter4/color-tinting/color-tinting.component';
import { FrostedGlassEffectComponent } from './chapter4/frosted-glass-effect/frosted-glass-effect.component';
import { FrostedCornerEffectComponent } from './chapter4/frosted-corner-effect/frosted-corner-effect.component';
import { Chapter5Component } from './chapter5/chapter5.component';
import { HyphenationComponent } from './chapter5/hyphenation/hyphenation.component';
import { InsertingLineBreaksComponent } from './chapter5/inserting-line-breaks/inserting-line-breaks.component';
import { ZebraStripedTextLinesComponent } from './chapter5/zebra-striped-text-lines/zebra-striped-text-lines.component';
import { AdjustingTabWidthComponent } from './chapter5/adjusting-tab-width/adjusting-tab-width.component';
import { LigaturesComponent } from './chapter5/ligatures/ligatures.component';
import { FancyAmpersandsComponent } from './chapter5/fancy-ampersands/fancy-ampersands.component';
import { CustomUnderlinesComponent } from './chapter5/custom-underlines/custom-underlines.component';
import { RealisticTextEffectsComponent } from './chapter5/realistic-text-effects/realistic-text-effects.component';

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
    ContinuousImageBordersComponent,
    Chapter3Component,
    FlexibleEllipsesComponent,
    ParallelogramsComponent,
    DiamondImagesComponent,
    CutoutCornersComponent,
    TrapezoidTabsComponent,
    SimplePieChartsComponent,
    Chapter4Component,
    OneSidedShadowsComponent,
    IrregularDropShadowsComponent,
    ColorTintingComponent,
    FrostedGlassEffectComponent,
    FrostedCornerEffectComponent,
    Chapter5Component,
    HyphenationComponent,
    InsertingLineBreaksComponent,
    ZebraStripedTextLinesComponent,
    AdjustingTabWidthComponent,
    LigaturesComponent,
    FancyAmpersandsComponent,
    CustomUnderlinesComponent,
    RealisticTextEffectsComponent,
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
