import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./rwd-production.scss";

import {
	RwdProductionProps,
	RwdProductionState,
	RwdProductionMethods
} from "./interfaces";

export const template = (
	data: RwdProductionProps & RwdProductionState & RwdProductionMethods
): HTMLFragment => {
	return html`
		<section class="production">
			<h2>Unsere Herstellung</h2>
			<h3>Anbau</h3>
			<p>
				Bei unseren Tabakplantagen achten wir besonders darauf, Energie
				aus Wind, Sonne, Wasserkraft und Biogas zu nutzen. Zudem geben
				wir unser bestes, die Wasserverschwendung so gering wie möglich
				zu halten und den Abbau unserer Pflanzen nachhaltig zu
				gestalten.
			</p>
			<h3>Ernte</h3>
			<p>
				Nur die qualitativ hochwertigsten Pflanzen werden bei der Ernte
				von unseren geschulten Mitarbeitern für dich ausgewählt. Die
				Ernte wird in reiner Handarbeit durchgeführt, damit das beste
				Produkt für dich entsteht.
			</p>
			<h3>Trocknung</h3>
			<p>
				Unser Tabak wird im vergleich zu herkömmlichem Tabak, bis zu 50
				Tage länger in der Sonne getrocknet. Dadurch kann der Tabak sein
				einzigartiges Aroma noch besser entfalten.
			</p>
		</section>
		${createStyle(styles)}
	`;
};
