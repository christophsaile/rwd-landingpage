import Component, { HTMLFragment } from "@biotope/element";
import { template } from "./template";
import {
	RwdProductionProps,
	RwdProductionState,
	RwdProductionMethods
} from "./interfaces";
import * as ScrollMagic from "scrollmagic";
import { ADDRGETNETWORKPARAMS } from "dns";
export class RwdProduction extends Component<
	RwdProductionProps,
	RwdProductionState
> {
	public static componentName = "rwd-production";

	public static attributes = [];

	protected readonly defaultProps: RwdProductionProps = {};

	protected readonly defaultState: RwdProductionState = {};

	public methods: RwdProductionMethods = {};

	ready() {
    this.initScrollAnimation();
  }

  private initScrollAnimation  = () => {
    const socialSection = this.shadowRoot.querySelector('.social__links');
    const socialTrigger = this.shadowRoot.querySelector('.social__scrollTrigger');

    let controller = new ScrollMagic.Controller();
    let scene = new ScrollMagic.Scene({
      triggerElement: socialTrigger,
      triggerHook: "onEnter",
    })
    .setClassToggle(socialSection, 'animate__fadeInUp')
		.addTo(controller)
  }

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

RwdProduction.register();
