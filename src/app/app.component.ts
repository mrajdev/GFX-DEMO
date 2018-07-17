import { Component, ViewChild, ElementRef, Input } from '@angular/core';
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';
import ScrollMagic from 'scrollmagic';
import {Linear, TimelineMax, TweenMax, Back} from "gsap";
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('word') word: ElementRef;
  @ViewChild('dot') dot: ElementRef;
  ctrl = new ScrollMagic.Controller();
  strokeLength = "";
  strokeCss = false;
  dotStrokeCss = false;

  @ViewChild('script') script: ElementRef;
  @Input()
  src: string;

  @Input()
  type: string;

  convertToScript() {
    var element = this.script.nativeElement;
    var script = document.createElement("script");
    script.src = this.src ? this.src : "https://nextparticle.nextco.de/nextparticle.min.js";
    if (this.src) {
        script.src = this.src;
    }
  
    element.append(script);
}

ngAfterViewInit() {
    this.convertToScript();
}

  doTwinAnimation() {
    let tween = TweenMax.staggerFromTo(".animate4", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);

    new ScrollMagic.Scene({
      triggerElement: '#trigger4',
      duration: 300
    })
      .setTween(tween)
      .addIndicators({name: "staggering"})
      .addTo(this.ctrl);
  }

  doCallBackAnimation() {
    let tween = TweenMax.to("#animate", 2, {rotationY: 180});
    // build scene and supply getMousePos function as duration
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 0})
            .setTween(tween)
            .addIndicators()
            .addTo(this.ctrl);
  }

  doSvgDrawing() {
    this.strokeCss = true;

    setTimeout(()=>{
      this.dotStrokeCss = true;
      // build tween
    let tween = new TimelineMax()
      .add(TweenMax.to("path", 5, {stroke: "red", ease:Linear.easeNone}), 0);			// change color during the whole thing
    },5000);
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