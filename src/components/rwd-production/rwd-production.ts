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

	private initScrollAnimation = () => {
		const socialSection = this.shadowRoot.querySelector(".social__links");
		const socialTrigger = this.shadowRoot.querySelector(
			".social__scrollTrigger"
		);
		const flowers = this.shadowRoot.querySelectorAll(
			".production__flowers svg"
		);

		let controller = new ScrollMagic.Controller();
		// let socialAnimation = new ScrollMagic.Scene({
		// 	triggerElement: socialTrigger,
		// 	triggerHook: "onEnter"
		// })
		// 	.setClassToggle(socialSection, "animate__fadeInUp")
		// 	.addTo(controller);

		let flowersAnimation = new ScrollMagic.Scene({
			triggerElement: "#production",
			triggerHook: "onEnter"
		})
			.on("enter", () => {
				flowers.forEach(item => {
					if (item.classList.contains("production__flowers--left")) {
						item.classList.add("animate__fadeInLeft");
						item.addEventListener("animationend", function() {
							item.classList.remove("animate__fadeInLeft");
						});
					} else {
						item.classList.add("animate__fadeInRight");
						item.addEventListener("animationend", function() {
							item.classList.remove("animate__fadeInRight");
						});
					}
				});
			})
			.addTo(controller);
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

RwdProduction.register();
