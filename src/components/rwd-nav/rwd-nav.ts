import Component, { HTMLFragment, createRef } from '@biotope/element';
import { template } from './template';
import { RwdNavProps, RwdNavState, RwdNavMethods } from './interfaces';

export class RwdNav extends Component< RwdNavProps, RwdNavState > {
  public static componentName = 'rwd-nav';
  
  public static attributes = [];

  private refs = {
    menuIconRef: createRef<HTMLElement>(),
  };

  ready() {

    this.refs.menuIconRef.current.addEventListener("click", this.handleMenuClick);

  }

  public handleMenuClick = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
    console.log(this.state.isMenuOpen);
  }



  protected readonly defaultProps: RwdNavProps = {};

  protected readonly defaultState: RwdNavState = {
    isMenuOpen: false
  };
  
  public methods: RwdNavMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods },
      this.refs
      );
  }
}

RwdNav.register();
