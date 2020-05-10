import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-nav.scss';

import { RwdNavProps, RwdNavState, RwdNavMethods } from './interfaces';


export const template = ( data: RwdNavProps & RwdNavState & RwdNavMethods ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
