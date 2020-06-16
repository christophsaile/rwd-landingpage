import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./rwd-facts.scss";

import { RwdFactsProps, RwdFactsState, RwdFactsMethods } from "./interfaces";

export const template = (
	data: RwdFactsProps & RwdFactsState & RwdFactsMethods
): HTMLFragment => {
	return html`
		<section class="facts">
			<div class="facts__container">
				<div class="facts__numbers">
					<p>
						<span class="facts__superNumber"
							><span class="firstNumber">4800</span></span
						>
						<br />
						Schadstoffe
					</p>
					<p>
						<span class="facts__superNumber"
							><span class="secondNumber">0</span>%</span
						>
						<br />
						Natürliche Aromen
					</p>
					<p>
						<span class="facts__superNumber"
							><span class="thirdNumber">0</span>%</span
						>
						<br />
						Umweltfreundlicher
					</p>
				</div>
			</div>
		</section>
		${createStyle(styles)}
	`;
};
