import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-button.scss';

import { RwdButtonProps, RwdButtonState, RwdButtonMethods } from './interfaces';


export const template = ( data: RwdButtonProps & RwdButtonState & RwdButtonMethods ): HTMLFragment => {
  return html`
  <button class="button">
    <a class="button__link" href=${data.link}>
      <slot class="button__text"/>
    </a>
  </button>
    ${createStyle(styles)}
  `;
}
