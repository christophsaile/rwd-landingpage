import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-products.scss';

import { RwdProductsProps, RwdProductsState, RwdProductsMethods } from './interfaces';


export const template = ( data: RwdProductsProps & RwdProductsState & RwdProductsMethods ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
