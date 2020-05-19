import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdButtonProps, RwdButtonState, RwdButtonMethods } from './interfaces';

export class RwdButton extends Component< RwdButtonProps, RwdButtonState > {
  public static componentName = 'rwd-button';
  
  public static attributes = [
    'link'
  ];

  protected readonly defaultProps: RwdButtonProps = {
    link: null
  };

  protected readonly defaultState: RwdButtonState = {};

  public methods: RwdButtonMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdButton.register();
