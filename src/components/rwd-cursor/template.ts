import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './rwd-cursor.scss';

import { RwdCursorProps, RwdCursorState, RwdCursorMethods } from './interfaces';


export const template = ( data: RwdCursorProps & RwdCursorState & RwdCursorMethods, refs: any ): HTMLFragment => {
  return html`
    <div ref=${refs.innerCursorRef} class="cursor cursor--small"></div>
		<canvas ref=${refs.canvasRef} class="cursor cursor--canvas" resize></canvas>
    ${createStyle(styles)}
  `;
}
