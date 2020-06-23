import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-nav.scss';
import cn from 'classnames';

import { RwdNavProps, RwdNavState, RwdNavMethods } from './interfaces';

export const template = (
	data: RwdNavProps & RwdNavState & RwdNavMethods,
	refs: any
): HTMLFragment => {
	const navStates = cn('nav', {
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
							<a href="#"><span>Home</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#facts"><span>Facts</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#products"><span>Products</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#recycle"><span>Recycle</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#production"><span>Production</span></a>
						</li>
						<li class="navMenu__link">
							<a href="#philosophy"><span>Philosophy</span></a>
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
					>Erfahre mehr</span
				>
				<span ref=${refs.learnMoreIconRef}>
					<svg
						class="navLearnMore__icon"
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
					>
						<path
							d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
						/>
					</svg>
				</span>
			</section>
		</nav>
	`;
};
