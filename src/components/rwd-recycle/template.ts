import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-recycle.scss';

import { RwdRecycleProps, RwdRecycleState, RwdRecycleMethods } from './interfaces';


export const template = ( data: RwdRecycleProps & RwdRecycleState & RwdRecycleMethods ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
