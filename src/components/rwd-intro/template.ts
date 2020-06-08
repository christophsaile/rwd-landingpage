import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-intro.scss';

import { RwdIntroProps, RwdIntroState, RwdIntroMethods } from './interfaces';


export const template = ( data: RwdIntroProps & RwdIntroState & RwdIntroMethods ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
