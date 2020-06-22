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
								srcset="_assets/cigarette_pack.png"
								media="(min-width: 768px)"
							/>
							<img
								src="_assets/cigarette_pack_mobile.png"
								alt="cigarette pack"
							/>
            </picture>
            <h3>L&S Classic</h3>
          </div>
          <div class="products__singleItem">
						<picture>
							<source
								srcset="_assets/cigarette_pack.png"
								media="(min-width: 768px)"
							/>
							<img
								src="_assets/cigarette_pack_mobile.png"
								alt="cigarette pack"
							/>
            </picture>
            <h3>L&S Light</h3>
          </div>
          <div class="products__singleItem">
						<picture>
							<source
								srcset="_assets/cigarette_pack.png"
								media="(min-width: 768px)"
							/>
							<img
								src="_assets/cigarette_pack_mobile.png"
								alt="cigarette pack"
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
