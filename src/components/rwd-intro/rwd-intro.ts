import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdIntroProps, RwdIntroState, RwdIntroMethods } from './interfaces';

export class RwdIntro extends Component< RwdIntroProps, RwdIntroState > {
  public static componentName = 'rwd-intro';
  
  public static attributes = [];

  protected readonly defaultProps: RwdIntroProps = {};
   
  protected readonly defaultState: RwdIntroState = {};

  public methods: RwdIntroMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdIntro.register();
