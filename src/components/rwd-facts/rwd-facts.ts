import Component, { HTMLFragment, createRef } from "@biotope/element";
import { template } from "./template";
import { RwdFactsProps, RwdFactsState, RwdFactsMethods } from "./interfaces";
import * as ScrollMagic from "scrollmagic";
import counter from '../../resources/ts/counterFunction'

export class RwdFacts extends Component<RwdFactsProps, RwdFactsState> {
	public static componentName = "rwd-facts";

	public static attributes = [];

	protected readonly defaultProps: RwdFactsProps = {};

	protected readonly defaultState: RwdFactsState = {};

	public methods: RwdFactsMethods = {};

	ready() {
		this.initScrollAnimation();
	}

	public initScrollAnimation() {
		let controller = new ScrollMagic.Controller();
		let animateNumbers = new ScrollMagic.Scene({
			triggerElement: "#facts",
			triggerHook: 0.9,
			reverse: false
		})
			.on("start", () => {
				counter(this.shadowRoot.querySelector('.firstNumber'), 4800, 0, 3000);
				counter(this.shadowRoot.querySelector('.secondNumber'), 0, 100, 3000);
				counter(this.shadowRoot.querySelector('.thirdNumber'), 0, 78, 3000);
			})
			.addTo(controller);
	}

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

RwdFacts.register();
