import Component, { HTMLFragment } from "@biotope/element";
import { template } from "./template";
import {
	RwdRecycleProps,
	RwdRecycleState,
	RwdRecycleMethods
} from "./interfaces";
import * as ScrollMagic from "scrollmagic"

export class RwdRecycle extends Component<RwdRecycleProps, RwdRecycleState> {
	public static componentName = "rwd-recycle";

	public static attributes = [];

	protected readonly defaultProps: RwdRecycleProps = {};

	protected readonly defaultState: RwdRecycleState = {};

	public methods: RwdRecycleMethods = {};

	ready() {
		//this.setPosition();
		//window.addEventListener("resize", this.setPosition);
		this.initAnimation();
	}

	public initAnimation = () => {
		const items = this.shadowRoot.querySelectorAll(".recycle__item");
		const animationTrigger = this.shadowRoot.querySelector(
			".recycle__container"
		);

		let controller = new ScrollMagic.Controller();
		let scene = new ScrollMagic.Scene({
			triggerElement: items,
			triggerHook: "onEnter"
		})
			.on("enter", () => {
				items.forEach(item => {
					item.classList.add("animate__fadeInUp");
					item.addEventListener("animationend", function() {
						item.classList.remove("animate__fadeInUp");
					});
				});
			})
			.addTo(controller);
	};

	public setPosition = () => {
		const paper: HTMLElement = this.shadowRoot.querySelector(
			".recycle__paper"
		);
		const windowWidth: number = window.innerWidth;
		const maxWidth: number = 1440;
		let resizeTimer;

		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			if (windowWidth > maxWidth) {
				const calcNewPosition = -(windowWidth - maxWidth) / 2;
				paper.style.left = calcNewPosition.toLocaleString() + "px";
			} else {
				paper.style.left = "0px";
			}
		}, 250);
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

RwdRecycle.register();
