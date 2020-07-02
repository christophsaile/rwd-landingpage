import Component, { HTMLFragment } from "@biotope/element";
import { template } from "./template";
import {
	RwdRecycleProps,
	RwdRecycleState,
	RwdRecycleMethods
} from "./interfaces";

export class RwdRecycle extends Component<RwdRecycleProps, RwdRecycleState> {
	public static componentName = "rwd-recycle";

	public static attributes = [];

	protected readonly defaultProps: RwdRecycleProps = {};

	protected readonly defaultState: RwdRecycleState = {};

	public methods: RwdRecycleMethods = {};

	ready() {
		//this.setPosition();
		//window.addEventListener("resize", this.setPosition);
	}

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
				console.log(windowWidth);
				console.log(maxWidth);
				const calcNewPosition = -(windowWidth - maxWidth) / 2;
				console.log(calcNewPosition);
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
