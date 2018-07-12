import { Component, ViewChild, ElementRef } from '@angular/core';
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
// import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';
import ScrollMagic from 'scrollmagic';
import {Linear, TimelineMax, TweenMax, Back} from "gsap";

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

  pathPrepare (el) {
      var lineLength = el.getTotalLength();
      this.strokeLength = lineLength;
      // el.css("stroke-dasharray", lineLength);
      // el.css("stroke-dashoffset", lineLength);
  }

  doSvgDrawing() {
  
    // prepare SVG
    this.pathPrepare(this.word.nativeElement);
    this.pathPrepare(this.dot.nativeElement);

    // build tween
    let tween = new TimelineMax()
      .add(TweenMax.to(this.word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
      .add(TweenMax.to(this.dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
      .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.ctrl);
  }
}
