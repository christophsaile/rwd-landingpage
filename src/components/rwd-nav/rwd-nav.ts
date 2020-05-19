import Component, { HTMLFragment, createRef } from '@biotope/element';
import { template } from './template';
import { RwdNavProps, RwdNavState, RwdNavMethods } from './interfaces';

import { Swipe } from '../../resources/js/swipeHandler';
import * as ScrollMagic from 'scrollmagic';

export class RwdNav extends Component<RwdNavProps, RwdNavState> {
	public static componentName = 'rwd-nav';

	public static attributes = [];

	private refs = {
		menuIconRef: createRef<HTMLElement>(),
		menuItemsRef: createRef<HTMLElement>(),
		counterRef: createRef<HTMLElement>(),
		counterFirstItemRef: createRef<HTMLElement>(),
		counterLastItemRef: createRef<HTMLElement>(),
		learnMoreRef: createRef<HTMLElement>(),
		learnMoreTextRef: createRef<HTMLElement>(),
		learnMoreIconRef: createRef<HTMLElement>()
	};

	public allSections: NodeListOf<HTMLElement>;
	public firstSection: HTMLElement;
	public lastSection: HTMLElement;
	public footer: HTMLElement;

	ready() {
		this.allSections = document.querySelectorAll('.fullpage');
		this.firstSection = this.allSections[0];
		this.lastSection = this.allSections[this.allSections.length - 1];
		this.footer = document.querySelector('#footer');

		this.initMenu();
		this.initCounter();
		this.initLearnMore();
	}

	public initMenu = () => {
		this.refs.menuIconRef.current.addEventListener(
			'click',
			this.handleIconClick
		);

		this.refs.menuItemsRef.current.addEventListener(
			'click',
			this.handleMenuClick
		);
		
		this.handleSwipe();
	};

	public handleIconClick = () => {
		this.setState({
			isMenuOpen: !this.state.isMenuOpen
		});
	};

	public handleMenuClick = () => {
		this.setState({
			isMenuOpen: false
		});
	};

	public handleSwipe = () => {
		let swiper = new Swipe('.nav');
		swiper.onLeft(() => this.setState({ isMenuOpen: true }));
		swiper.onRight(() => this.setState({ isMenuOpen: false }));
		swiper.run();
	}

	public initCounter = () => {
		this.setLastPageNumber();
		this.counterScrollAnimation();
	};

	public setLastPageNumber = () => {
		const numberOfSections: String = this.allSections.length.toString();
		this.refs.counterLastItemRef.current.innerHTML = '0' + numberOfSections;
	};

	public counterScrollAnimation = () => {
		const currentPage: HTMLElement = this.refs.counterFirstItemRef.current;
		let controller = new ScrollMagic.Controller();

		this.allSections.forEach((element, index) => {
			let scene = new ScrollMagic.Scene({
				triggerElement: element,
				duration: '100%',
				triggerHook: 0.5
			})
				.addTo(controller)
				.on('enter', function() {
					currentPage.innerHTML = '0' + (index + 1);
					currentPage.setAttribute('href', '#' + element.id);
				});
		});
	};

	public initLearnMore = () => {
		this.refs.learnMoreRef.current.addEventListener(
			'click',
			this.handleLearnMoreClick
		);
		this.learnMoreScrollAnimation();
	};

	public handleLearnMoreClick = () => {
		if (
			this.refs.learnMoreIconRef.current.classList.contains('switchArrow')
		) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		} else {
			window.scrollBy({
				top: window.innerHeight,
				left: 0,
				behavior: 'smooth'
			});
		}
	};

	public learnMoreScrollAnimation = () => {
		let controller = new ScrollMagic.Controller();
		let switchArrow = new ScrollMagic.Scene({
			triggerElement: this.lastSection,
			triggerHook: 0.5
		})
			.setClassToggle(this.refs.learnMoreIconRef.current, 'switchArrow')
			.addTo(controller);

		let showText = new ScrollMagic.Scene({
			triggerElement: this.firstSection,
			triggerHook: 0.9,
			duration: this.firstSection.clientHeight
		})
			.setClassToggle(this.refs.learnMoreTextRef.current, 'showText')
			.addTo(controller);
	};

	protected readonly defaultProps: RwdNavProps = {};

	protected readonly defaultState: RwdNavState = {
		isMenuOpen: false
	};

	public methods: RwdNavMethods = {};

	public render(): HTMLFragment {
		return template(
			{ ...this.props, ...this.state, ...this.methods },
			this.refs
		);
	}
}

RwdNav.register();
