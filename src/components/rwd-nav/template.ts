import { html, createStyle, HTMLFragment } from "@biotope/element";
import * as styles from "./rwd-nav.scss";
import cn from "classnames";

import { RwdNavProps, RwdNavState, RwdNavMethods } from "./interfaces";

export const template = (
	data: RwdNavProps & RwdNavState & RwdNavMethods,
	refs: any
): HTMLFragment => {
	const navStates = cn("nav", {
		navMenuOpen: data.isMenuOpen
	});

	return html`
		${createStyle(styles)}
		<nav class=${navStates}>
			<section class="navMenu">
				<div ref=${refs.menuIconRef} class="navMenu__icon">
					<span></span>
					<span></span>
				</div>
				<div ref=${refs.menuItemsRef} class="navMenu__items">
					<ul>
						<li class="navMenu__link">
							<a href="#products"><span>Jetzt kaufen</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#recycle"><span>Nachhaltigkeit</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#production"><span>Herstellung</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#philosophy"><span>Unsere Philosophie</span></a>
						</li>
					</ul>
				</div>
			</section>
			<section class="navCounter">
				<ul ref=${refs.counterRef} class="navCounter__container">
					<li class="navCounter__item">
						<a
							ref=${refs.counterFirstItemRef}
							class="navCounter__link navCounter__link--active"
							>01</a
						>
					</li>
					<li class="navCounter__item">
						<a
							ref=${refs.counterLastItemRef}
							class="navCounter__link"
							href="#philosophy"
							>04</a
						>
					</li>
				</ul>
			</section>
			<section ref=${refs.learnMoreRef} class="navLearnMore">
				<span ref=${refs.learnMoreTextRef} class="navLearnMore__text"
					>mehr erfahren</span
				>
				<span ref=${refs.learnMoreIconRef}>
				<svg class="navLearnMore__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 14"><g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1"><polygon points="27.12 0 14 12.58 0.91 0 0 0.54 14 14 28 0.53 27.12 0 27.12 0"/></g></g></svg>				</span>
			</section>
		</nav>
	`;
};
