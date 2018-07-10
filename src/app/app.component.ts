import { Component } from '@angular/core';
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce,Cubic,Back, Elastic:any;
import "gsap";
import * as ScrollMagic from 'scrollmagic';

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
}
