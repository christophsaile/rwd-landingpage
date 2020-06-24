import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-footer.scss';

import { RwdFooterProps, RwdFooterState, RwdFooterMethods } from './interfaces';


export const template = ( data: RwdFooterProps & RwdFooterState & RwdFooterMethods ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
