import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import ScrollMagic from 'scrollmagic';
import {Linear, TimelineMax, TweenMax, Back} from "gsap";
import { trigger, state, style, transition, animate } from '@angular/animations'
import { HostListener } from '@angular/core';
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('word') word: ElementRef;
  @ViewChild('dot') dot: ElementRef;
  ctrl:any;
  strokeLength = "";
  strokeCss = false;
  dotStrokeCss = false;

  @ViewChild('particleDiv') particleDiv: ElementRef;
  @ViewChild('pinContainer') pinContainer: ElementRef;
  @ViewChild('slideContainer') slideContainer: ElementRef;
  @ViewChild('trigger4') trigger: ElementRef;
  
  ngOnInit() {
    
  }
  

  // addingNextParticleScriptToImageTag() {
  //   var element = this.particleDiv.nativeElement;
  //   var particleDivScript = document.createElement("script");
  //   particleDivScript.src = "https://nextparticle.nextco.de/nextparticle.min.js";
  //   element.append(particleDivScript);
  // }

  ngAfterViewInit() {
    // this.addingNextParticleScriptToImageTag();
    // this.initsectionWipe();
    // var trigger = document.getElementById("#trigger4");
  }

  initsectionWipe() {
    this.ctrl = new ScrollMagic.Controller();
    // define movement of panels
    var wipeAnimation = new TimelineMax()
      // animate to second panel
      .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
      .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
      .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
      // animate to third panel
      .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-50%"})
      .to("#slideContainer", 0.5, {z: 0})
      // animate to forth panel
      .to("#slideContainer", 0.5, {z: -150, delay: 1})
      .to("#slideContainer", 1,   {x: "-75%"})
      .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(this.ctrl);
  }

  // @HostListener("window:scroll", []) onWindowScroll() {
  //   const verticalOffset = window.pageYOffset 
  //         || document.documentElement.scrollTop 
  //         || document.body.scrollTop || 0;
  //         console.log(verticalOffset);
        
  //         var xAxis = "-0%";
  //         if(verticalOffset >= (document.documentElement.scrollHeight*(25/100))) {
  //           xAxis = "-25%";
  //         }
  //         else if(verticalOffset >= (document.documentElement.scrollHeight*(50/100))) {
  //           xAxis = "-50%";
  //         }
  //         else if(verticalOffset >= (document.documentElement.scrollHeight*(75/100))) {
  //           xAxis = "-50%";
  //         }

  //         // define movement of panels
  //   var wipeAnimation = new TimelineMax()
  //   // animate to second panel
  //   .to("#slideContainer", 0.5, {z: -150, delay: 1})		// move back in 3D space
  //   .to("#slideContainer", 1,   {x: xAxis})	// move in to first panel
  //   .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
  //   // // animate to third panel
  //   // .to("#slideContainer", 0.5, {z: -150, delay: 1})
  //   // .to("#slideContainer", 1,   {x: "-50%"})
  //   // .to("#slideContainer", 0.5, {z: 0})
  //   // // animate to forth panel
  //   // .to("#slideContainer", 0.5, {z: -150, delay: 1})
  //   // .to("#slideContainer", 1,   {x: "-75%"})
  //   // .to("#slideContainer", 0.5, {z: 0});

  // // create scene to pin and link animation
  // new ScrollMagic.Scene({
  //     triggerElement: "#pinContainer",
  //     triggerHook: "onLeave",
  //     duration: "500%"
  //   })
  //   .setPin("#pinContainer")
  //   .setTween(wipeAnimation)
  //   .addIndicators() // add indicators (requires plugin)
  //   .addTo(this.ctrl);
  // }

  doTwinAnimation() {
    this.ctrl = new ScrollMagic.Controller();
    let tween = TweenMax.staggerFromTo(".animate4", 2, {left: 0}, {left: 0, ease: Back.easeOut}, 0.15);

    new ScrollMagic.Scene({
      triggerElement: this.trigger,
      duration: 300
    })
      .setTween(tween)
      .addIndicators({name: "staggering"})
      .addTo(this.ctrl);
  }

  doCallBackAnimation() {
    this.ctrl = new ScrollMagic.Controller();
    let tween = TweenMax.to("#animate", 2, {rotationY: 180});
    // build scene and supply getMousePos function as duration
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 0})
            .setTween(tween)
            .addIndicators()
            .addTo(this.ctrl);
  }

  doSvgDrawing() {
    if (!this.strokeCss) {
      this.strokeCss = true;

      setTimeout(()=>{
        this.dotStrokeCss = true;
        // build tween
      let tween = new TimelineMax()
        .add(TweenMax.to("path", 5, {stroke: "red", ease:Linear.easeNone}), 0);			// change color during the whole thing
      },5000);
    }
    else {
      this.strokeCss = false;
      this.dotStrokeCss = false;
    }
  }
}


// import { Component } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations'

// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="tp-wrapper">
//       <div class="tp-box" (click)="toggleFlip()" [@flipState]="flip">
//         <div class="tp-box__side tp-box__front">Front
//         </div>
//         <div class="tp-box__side tp-box__back">Back
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [
//     `
//     .tp-wrapper {
//       perspective: 800px;
//     }

//     .tp-box {
//       position: relative;
//       width: 200px;
//       height: 100px;
//       margin: 3rem auto;
//       transform-style: preserve-3d;
//       transition: transform 1s;
//     }
//     .tp-box__side {
//       width: 100%;
//       height: 100%;
//       position: absolute;
//       backface-visibility: hidden;
//       color: #fff;
//       text-align: center;
//       line-height: 100px;
//       font-size: 24px;
//       font-weight: 700;
//       cursor: pointer;
//       user-select: none;
//     }
//     .tp-box__front {
//       background: #f30d36;
//     }
//     .tp-box__back {
//       background: #23262d;
//       transform: rotateY(179.9deg);
//     }

//     `
//   ],
//   animations: [
//     trigger('flipState', [
//       state('active', style({
//         transform: 'rotateY(179.9deg)'
//       })),
//       state('inactive', style({
//         transform: 'rotateY(0)'
//       })),
//       transition('active => inactive', animate('500ms ease-out')),
//       transition('inactive => active', animate('500ms ease-in'))
//     ])  
//   ]
// })
// export class AppComponent {

//   flip: string = 'inactive';
//   constructor() {}

//   toggleFlip() {
//     this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
//   }

// }