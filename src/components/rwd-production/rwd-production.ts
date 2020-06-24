import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdProductionProps, RwdProductionState, RwdProductionMethods } from './interfaces';

export class RwdProduction extends Component< RwdProductionProps, RwdProductionState > {
  public static componentName = 'rwd-production';
  
  public static attributes = [];

  protected readonly defaultProps: RwdProductionProps = {};
   
  protected readonly defaultState: RwdProductionState = {};

  public methods: RwdProductionMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdProduction.register();
