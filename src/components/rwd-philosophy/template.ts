import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./rwd-philosophy.scss";

import {
	RwdPhilosophyProps,
	RwdPhilosophyState,
	RwdPhilosophyMethods
} from "./interfaces";

export const template = (
	data: RwdPhilosophyProps & RwdPhilosophyState & RwdPhilosophyMethods
): HTMLFragment => {
	return html`
		<section class="philosophy">
			<div class="philosophy__grid">
				<h2>Das Erwartet dich</h2>
				<picture>
					<source
						srcset="https://dummyimage.com/1200x800/000/fff"
						media="(min-width: 768px)"
					/>
					<img src="https://dummyimage.com/800x1200/000/fff"
					alt="hand holding a cigarette" />
				</picture>
				<p>
					Rauchen ist Teil deines Lifestyles? Es war noch nie so
					einfach Gutes damit zu bewegen. Für dich selbst, deine
					Umgebung und die Umwelt. Der Geschmack bleibt, die
					Inhaltsstoffe sind für dich verbessert.
				</p>
			</div>
		</section>
		${createStyle(styles)}
	`;
};
