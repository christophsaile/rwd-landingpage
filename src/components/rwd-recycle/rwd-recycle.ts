import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdRecycleProps, RwdRecycleState, RwdRecycleMethods } from './interfaces';

export class RwdRecycle extends Component< RwdRecycleProps, RwdRecycleState > {
  public static componentName = 'rwd-recycle';
  
  public static attributes = [];

  protected readonly defaultProps: RwdRecycleProps = {};
   
  protected readonly defaultState: RwdRecycleState = {};

  public methods: RwdRecycleMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdRecycle.register();
