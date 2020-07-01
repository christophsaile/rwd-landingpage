import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdPhilosophyProps, RwdPhilosophyState, RwdPhilosophyMethods } from './interfaces';
import * as ScrollMagic from "scrollmagic";

export class RwdPhilosophy extends Component< RwdPhilosophyProps, RwdPhilosophyState > {
  public static componentName = 'rwd-philosophy';
  
  public static attributes = [];

  protected readonly defaultProps: RwdPhilosophyProps = {};
   
  protected readonly defaultState: RwdPhilosophyState = {};

  public methods: RwdPhilosophyMethods = {};

  ready() {
		this.initScrollAnimation();
  }
  
  public initScrollAnimation() {
    const img = this.shadowRoot.querySelector('img');

    let controller = new ScrollMagic.Controller();
    let animateImg = new ScrollMagic.Scene({
			triggerElement: img,
			triggerHook: "onEnter",
		})
		.setClassToggle(img, "animate__fadeInRight")
		.addTo(controller);
    
  }

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdPhilosophy.register();
