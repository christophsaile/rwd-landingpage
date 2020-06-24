import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdFooterProps, RwdFooterState, RwdFooterMethods } from './interfaces';

export class RwdFooter extends Component< RwdFooterProps, RwdFooterState > {
  public static componentName = 'rwd-footer';
  
  public static attributes = [];

  protected readonly defaultProps: RwdFooterProps = {};
   
  protected readonly defaultState: RwdFooterState = {};

  public methods: RwdFooterMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdFooter.register();
