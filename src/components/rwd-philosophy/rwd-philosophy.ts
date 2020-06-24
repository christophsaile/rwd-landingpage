import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdPhilosophyProps, RwdPhilosophyState, RwdPhilosophyMethods } from './interfaces';

export class RwdPhilosophy extends Component< RwdPhilosophyProps, RwdPhilosophyState > {
  public static componentName = 'rwd-philosophy';
  
  public static attributes = [];

  protected readonly defaultProps: RwdPhilosophyProps = {};
   
  protected readonly defaultState: RwdPhilosophyState = {};

  public methods: RwdPhilosophyMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdPhilosophy.register();
