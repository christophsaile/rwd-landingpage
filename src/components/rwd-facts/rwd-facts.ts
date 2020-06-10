import Component, { HTMLFragment, createRef } from "@biotope/element";
import { template } from "./template";
import { RwdFactsProps, RwdFactsState, RwdFactsMethods } from "./interfaces";
import { RwdButton } from "../rwd-button/rwd-button";
import * as ScrollMagic from "scrollmagic";

export class RwdFacts extends Component<RwdFactsProps, RwdFactsState> {
	public static componentName = "rwd-facts";

	public static attributes = [];

	public static dependencies = [RwdButton as typeof Component];

	protected readonly defaultProps: RwdFactsProps = {};

	protected readonly defaultState: RwdFactsState = {};

	public methods: RwdFactsMethods = {};

	ready() {
    this.initScrollAnimation ();
	}

  public initScrollAnimation() {
    let controller = new ScrollMagic.Controller();
		let animateNumbers = new ScrollMagic.Scene({
			triggerElement: "#facts",
      triggerHook: 0.90,
      reverse: false
		})
			.on('start', () => {
        console.log('fired');
        this.animateValue(".firstNumber", 0, 4800, 3000);
        this.animateValue(".secondNumber", 0, 100, 3000);
        this.animateValue(".thirdNumber", 0, 78, 3000);
      })
      .addTo(controller);
      
      console.log(animateNumbers);
  }

	public animateValue(
		elem: string,
		start: number,
		end: number,
		duration: number
	) {
		const obj = this.shadowRoot.querySelector(elem) as HTMLElement;
		console.log(obj);
		const range = end - start;

		// no timer shorter than 50ms (not really visible any way)
		const minTimer = 50;
		// calc step time to show all interediate values
		let stepTime = Math.abs(Math.floor(duration / range));

		// never go below minTimer
		stepTime = Math.max(stepTime, minTimer);

		// get current time and calculate desired end time
		const startTime = new Date().getTime();
		const endTime = startTime + duration;
		let timer;

		function run() {
			const now = new Date().getTime();
			const remaining = Math.max((endTime - now) / duration, 0);
			const value = Math.round(end - remaining * range);
			obj.innerHTML = value.toLocaleString();
			if (value == end) {
				clearInterval(timer);
			}
		}

		timer = setInterval(run, stepTime);
		run();
	}

	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods }
		);
	}
}

RwdFacts.register();
