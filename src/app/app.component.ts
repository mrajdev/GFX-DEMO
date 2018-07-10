import { Component } from '@angular/core';
import {TweenLite, Power1, Power2, TimelineMax, TweenMax, Back} from "gsap";
import ScrollMagic from 'scrollmagic';
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/ScrollMagic.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ctrl = new ScrollMagic.Controller();

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
    let tween = TweenMax.to("#animate", 0.5, {rotationY: 180});
    // build scene and supply getMousePos function as duration
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 0.15})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.ctrl);
  }
						// // make a variable to store the mouse pos.
						// var mouseTopPerc = 0;
						// // function to be used to retrieve variable
						// function getMousePos() {
						// 	return (mouseTopPerc * 400) + 10;
						// }
						// // update variable on mouse move
						// $("body").on("mousemove", function (e) {
						// 	mouseTopPerc = e.clientY/$(this).innerHeight();
						// });							

						// // init controller
						// var controller = new ScrollMagic.Controller();

						// // build tween
						// var tween = TweenMax.to("#animate", 0.5, {rotationY: 180});

						// // build scene and supply getMousePos function as duration
						// var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: getMousePos})
						// 				.setTween(tween)
						// 				.addIndicators() // add indicators (requires plugin)
						// 				.addTo(controller);
}
