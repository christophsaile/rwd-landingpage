import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { RwdProductsProps, RwdProductsState, RwdProductsMethods } from './interfaces';
import { RwdButton } from '../../components/rwd-button/rwd-button';
import * as ScrollMagic from 'scrollmagic';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

export class RwdProducts extends Component< RwdProductsProps, RwdProductsState > {
  public static componentName = 'rwd-products';
  
  public static attributes = [];

  public static dependencies = [RwdButton as typeof Component];

  protected readonly defaultProps: RwdProductsProps = {};
   
  protected readonly defaultState: RwdProductsState = {};

  public methods: RwdProductsMethods = {};

  ready() {
    this.initScrollAnimation()

  }

  private initScrollAnimation = () => {
    const images = this.shadowRoot.querySelectorAll('img');
    const animationTrigger = this.shadowRoot.querySelector('.products__container')
    console.log (images);


    let controller = new ScrollMagic.Controller();
    let scene = new ScrollMagic.Scene({
      triggerElement: animationTrigger,
      triggerHook: "onEnter",
    })
    .on('enter', () => {
      images.forEach((item) => {
        item.classList.add('animate__fadeInLeft')
        item.addEventListener('animationend', function () {
          item.classList.remove('animate__fadeInLeft')
        })
      })
    })
		.addTo(controller)
  }

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.state, ...this.methods });
  }
}

RwdProducts.register();
