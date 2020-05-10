import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-nav.scss';
import cn from 'classnames';

import { RwdNavProps, RwdNavState, RwdNavMethods } from './interfaces';

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
        <div class="navMenu__items">
          <ul>
            <li class="navMenu__link"><a href="#"><span>Section 1</span></a></li>
            <li class="navMenu__link"><a href="#section2"><span>Section 2</span></a></li>
            <li class="navMenu__link"><a href="#section3"><span>Section 3</span></a></li>
            <li class="navMenu__link"><a href="#section4"><span>Section 4</span></a></li>
          </ul>
        </div>
      </section>
      <section class="navCounter">

      </section>
      <section class="navArrow">
      
      </section>
    </nav>
	`;
};
