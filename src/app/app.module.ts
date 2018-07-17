import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicLogoComponent } from './basic-logo/basic-logo.component';
import { LogoWithBindingsComponent } from './logo-with-bindings/logo-with-bindings.component';

import { LogoWithComponentsModule } from './logo-with-components/logo-with-components.module';
import { ChangingCanvasLogoModule } from './changing-canvas-logo/changing-canvas-logo.module';

import { AnimatedLogoCssComponent } from './animated-logo-css/animated-logo-css.component';
import { AnimatedLogoGsapComponent } from './animated-logo-gsap/animated-logo-gsap.component';
import { BasicCanvasLogoComponent } from './basic-canvas-logo/basic-canvas-logo.component';
import { AnimatedCanvasLogoComponent } from './animated-canvas-logo/animated-canvas-logo.component';
import 'gsap';
import { ZUnderline } from './z-underline';

/** Map relative paths to URLs. */
const map: any = {
  'gsap': 'vendor/gsap/src/minified/' // this tells to system.js loader: Hey when you see: "import 'gsap'" in any of my project files, you should load it form: vendor/gsap blah blah..
};

/** User packages configuration. */
const packages: any = {
  gsap: {
    defaultExtension: 'js',
    main: 'TweenMax.min.js' // the entry point for the gsap package.
  }
}; 
@NgModule({
  declarations: [
    AppComponent,
    ZUnderline,
    BasicLogoComponent,
    LogoWithBindingsComponent,
    AnimatedLogoCssComponent,
    AnimatedLogoGsapComponent,
    BasicCanvasLogoComponent,
    AnimatedCanvasLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogoWithComponentsModule,
    ChangingCanvasLogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
