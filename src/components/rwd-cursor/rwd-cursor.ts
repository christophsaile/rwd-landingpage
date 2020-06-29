import Component, { HTMLFragment, createRef } from "@biotope/element";
import { template } from "./template";
import { RwdCursorProps, RwdCursorState, RwdCursorMethods } from "./interfaces";
import * as paper from "paper";
import * as SimplexNoise from "simplex-noise";
import { TweenMax, TimelineMax } from "gsap";

export class RwdCursor extends Component<RwdCursorProps, RwdCursorState> {
	public static componentName = "rwd-cursor";

	public static attributes = [];

	protected readonly defaultProps: RwdCursorProps = {};

	protected readonly defaultState: RwdCursorState = {};

	public methods: RwdCursorMethods = {};

	private refs = {
		innerCursorRef: createRef<HTMLElement>(),
		canvasRef: createRef<HTMLElement>()
	};

	ready() {
		if (window.innerWidth >= 768) {
			this.initCursor();
		}
		window.addEventListener("resize", this.initCursor);
	}

	public initCursor = () => {
		if (window.innerWidth >= 768) {
			// set the starting position of the cursor outside of the screen
			let clientX = -100;
			let clientY = -100;
			const innerCursor = this.refs.innerCursorRef.current;
			const initCursor = () => {
				// add listener to track the current mouse position
				document.addEventListener(
					"mousemove",
					e => {
						clientX = e.clientX;
						clientY = e.clientY;
					},
					{ passive: true }
				);

				// transform the innerCursor to the current mouse position
				// use requestAnimationFrame() for smooth performance
				const render = () => {
					TweenMax.set(innerCursor, {
						x: clientX,
						y: clientY
					});
					requestAnimationFrame(render);
				};
				requestAnimationFrame(render);
			};
			initCursor();

			let lastX = 0;
			let lastY = 0;
			let isStuck = false;
			let showCursor = false;
			let group, stuckX, stuckY, fillOuterCursor;

			const initCanvas = () => {
				const canvas = this.refs.canvasRef.current as HTMLCanvasElement;
				const shapeBounds = {
					width: 75,
					height: 75
				};

				paper.setup(canvas);
				const strokeColor: any = "#ff2232";
				const fill: any = "#FFFCF4";
				const strokeWidth = 1;
				const segments = 8;
				const radius = 15;

				// we'll need these later for the noisy circle
				const noiseScale = 150; // speed
				const noiseRange = 4; // range of distortion
				let isNoisy = false; // state

				// the base shape for the noisy circle
				const polygon = new paper.Path.RegularPolygon(
					new paper.Point(0, 0),
					segments,
					radius
				);
				polygon.strokeColor = strokeColor;
				polygon.strokeWidth = strokeWidth;
				polygon.fillColor = fill;
				polygon.opacity = 0.5;
				polygon.smooth();
				group = new paper.Group([polygon]);
				group.applyMatrix = false;

				const noiseObjects = polygon.segments.map(
					() => new SimplexNoise()
				);
				let bigCoordinates = [];

				// function for linear interpolation of values
				const lerp = (a, b, n) => {
					return (1 - n) * a + n * b;
				};

				// function to map a value from one range to another range
				const map = (value, in_min, in_max, out_min, out_max) => {
					return (
						((value - in_min) * (out_max - out_min)) /
							(in_max - in_min) +
						out_min
					);
				};

				// the draw loop of Paper.js
				// (60fps with requestAnimationFrame under the hood)
				paper.view.onFrame = event => {
					// using linear interpolation, the circle will move 0.2 (20%)
					// of the distance between its current position and the mouse
					// coordinates per Frame
					lastX = lerp(lastX, clientX, 0.2);
					lastY = lerp(lastY, clientY, 0.2);
					group.position = new paper.Point(lastX, lastY);
				};
			};

			initCanvas();
		}
	};

	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.refs
		);
	}
}

RwdCursor.register();
