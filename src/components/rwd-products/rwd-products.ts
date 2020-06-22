import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdProductsProps, RwdProductsState, RwdProductsMethods } from './interfaces';

export class RwdProducts extends Component< RwdProductsProps, RwdProductsState > {
  public static componentName = 'rwd-products';
  
  public static attributes = [];

  protected readonly defaultProps: RwdProductsProps = {};
   
  protected readonly defaultState: RwdProductsState = {};

  public methods: RwdProductsMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdProducts.register();
