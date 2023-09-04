import { MdList } from '../list/list';

/**
 * Represents a custom element for displaying a navigation bar.
 * Extends the MdList base class.
 *
 * @extends MdList
 * @element md-navigation-bar
 * @example
 * <md-navigation-bar></md-navigation-bar>
 */
class MdNavigationBar extends MdList {
    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-navigation-bar' and 'md-list--navigation-bar' classes to the element's class list.
     *
     * @override
     * @example
     * const navigationBar = document.querySelector('#myNavigationBar');
     * navigationBar.connectedCallback();
     */
    connectedCallback() {
        super.connectedCallback();

        /**
         * The class name for the navigation bar element.
         *
         * @readonly
         * @type {string}
         * @example
         * const navigationBar = document.querySelector('#myNavigationBar');
         * const className = navigationBar.md-navigation-bar;
         */
        this.classList.add('md-navigation-bar');
        this.classList.add('md-list--navigation-bar');
    }
}

/**
 * Custom element representing a navigation bar.
 *
 * @typedef {MdNavigationBar} md-navigation-bar
 * @global
 * @example
 * <md-navigation-bar></md-navigation-bar>
 */

// Define the custom element 'md-navigation-bar' using the MdNavigationBar class.
customElements.define('md-navigation-bar', MdNavigationBar);

export { MdNavigationBar };
