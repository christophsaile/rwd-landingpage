import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./rwd-products.scss";

import {
	RwdProductsProps,
	RwdProductsState,
	RwdProductsMethods
} from "./interfaces";

export const template = (
	data: RwdProductsProps & RwdProductsState & RwdProductsMethods
): HTMLFragment => {
	return html`
		<section class="products">
			<div class="products__container">
				<div class="products__allItems">
					<div class="products__singleItem">
						<picture>
							<source
								srcset="_assets/cigarette_pack_classic.png"
								media="(min-width: 768px)"
							/>
							<img
								class="animate__animated"
								src="_assets/cigarette_pack_classic_mobile.png"
								alt="cigarette pack"
								loading="lazy"
							/>
						</picture>
						<h3>L&S Classic</h3>
					</div>
					<div class="products__singleItem">
						<picture>
							<source
								srcset="_assets/cigarette_pack_light.png"
								media="(min-width: 768px)"
							/>
							<img
								class="animate__animated animate__delay-1s"
								src="_assets/cigarette_pack_light_mobile.png"
								alt="cigarette pack"
								loading="lazy"
							/>
						</picture>
						<h3>L&S Light</h3>
					</div>
					<div class="products__singleItem">
						<picture>
							<source
								srcset="_assets/cigarette_pack_summer.png"
								media="(min-width: 768px)"
							/>
							<img
								class="animate__animated animate__delay-2s"
								src="_assets/cigarette_pack_summer_mobile.png"
								alt="cigarette pack"
								loading="lazy"
							/>
						</picture>
						<h3>L&S Summer</h3>
					</div>
				</div>
				<rwd-button>Jetzt Kaufen</rwd-button>
			</div>
		</section>
		${createStyle(styles)}
	`;
};
