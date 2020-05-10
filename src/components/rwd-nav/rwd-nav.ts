import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdNavProps, RwdNavState, RwdNavMethods } from './interfaces';

export class RwdNav extends Component< RwdNavProps, RwdNavState > {
  public static componentName = 'rwd-nav';
  
  public static attributes = [];

  protected readonly defaultProps: RwdNavProps = {};
   
  protected readonly defaultState: RwdNavState = {};

  public methods: RwdNavMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdNav.register();
