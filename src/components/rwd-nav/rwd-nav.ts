import Component, { HTMLFragment, createRef } from '@biotope/element';
import { template } from './template';
import { RwdNavProps, RwdNavState, RwdNavMethods } from './interfaces';

import * as ScrollMagic from "scrollmagic";

export class RwdNav extends Component< RwdNavProps, RwdNavState > {
  public static componentName = 'rwd-nav';
  
  public static attributes = [];

  private refs = {
    menuIconRef: createRef<HTMLElement>(),
    counterRef: createRef<HTMLElement>(),
    counterFirstItemRef: createRef<HTMLElement>(),
    counterLastItemRef: createRef<HTMLElement>(),
    learnMoreRef: createRef<HTMLElement>(),
    learnMoreTextRef: createRef<HTMLElement>(),
    learnMoreIconRef: createRef<HTMLElement>(),
  };

  public allSections: NodeListOf<HTMLElement>;

  ready() {
    this.allSections = document.querySelectorAll(".fullpage");

    this.initMenu();
    this.initCounter();
  }

  public initMenu = () => {
    this.refs.menuIconRef.current.addEventListener("click", this.handleMenuClick);
  }

  public handleMenuClick = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
    console.log(this.state.isMenuOpen);
  }

  public initCounter = () => {
    this.setLastPageNumber();
    this.counterScrollAnimation();
  }

  public setLastPageNumber = () => {
    const numberOfSections: String = this.allSections.length.toString();
		this.refs.counterLastItemRef.current.innerHTML = "0" + numberOfSections;
  }

  public counterScrollAnimation = () => {
    const currentPage: HTMLElement = this.refs.counterFirstItemRef.current;
		let controller = new ScrollMagic.Controller();

		this.allSections.forEach((element, index) => {
			let scene = new ScrollMagic.Scene({
				triggerElement: element,
				duration: "100%",
				triggerHook: 0.5
			})
				.addTo(controller)
				.on("enter", function() {
					currentPage.innerHTML = "0" + (index + 1);
					currentPage.setAttribute("href", '#'+element.id);
				});
		});
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
