import { html } from 'lit';
import { MdElement } from '../../lib/element';
import { MdList } from '../list/list';
import { setPosition } from '../../lib/popover';

/**
 * Represents a custom element for displaying a menu.
 * Extends the MdElement base class.
 *
 * @fires MdMenu#onMenuScrimClick - Fired when the menu scrim is clicked.
 * @fires MdMenu#onMenuItemClick - Fired when a menu item is clicked.
 *
 * @extends MdElement
 * @element md-menu
 */
class MdMenu extends MdElement {
    /**
     * Defines the properties of the MdMenu element.
     *
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {
            ...MdList.properties,
            open: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdMenu.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdMenu element using lit-html.
     *
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <div class="md-menu__container">
                <md-list class="md-list--menu"
                         .selectable="${this.selectable}"
                         .data="${this.data}"
                         @onListItemClick="${this.handleMenuItemClick}">
                </md-list>
            </div>
            <!-- Menu Scrim -->
            <div class="md-menu__scrim" @click="${this.handleMenuScrimClick}"></div>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-menu' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-menu');
    }

    /**
     * Called when properties are updated.
     *
     * @param {Map<string | number | symbol, unknown>} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has('open')) {
            if (this.open) {
                this.classList.add('md-menu--open');
            } else {
                this.classList.remove('md-menu--open');
            }
        }
    }

    /**
     * Gets the menu container element.
     *
     * @returns {HTMLElement} The menu container element.
     */
    get menuContainer() {
        return this.querySelector('.md-menu__container');
    }

    /**
     * Shows the menu.
     *
     * @param {Object} options - Options for positioning the menu.
     */
    show(options = {}) {
        setPosition({
            ...options,
            placement: 'bottom-start',
            container: this.menuContainer,
        });
        this.open = true;
    }

    /**
     * Closes the menu.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the menu.
     */
    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    /**
     * Handles the click event on the menu scrim.
     *
     * @param {MouseEvent} event - The click event.
     * @fires MdMenu#onMenuScrimClick
     */
    handleMenuScrimClick(event) {
        this.close();
        /**
         * Emitted when the menu scrim is clicked.
         *
         * @event MdMenu#onMenuScrimClick
         * @type {Object}
         * @property {MouseEvent} event - The original click event.
         */
        this.emit('onMenuScrimClick', {
            event,
        });
    }

    /**
     * Handles the click event on a menu item.
     *
     * @param {CustomEvent} event - The custom event containing the clicked menu item.
     * @fires MdMenu#onMenuItemClick
     */
    handleMenuItemClick(event) {
        const menuItem = event.detail.listItem;
        this.close();
        /**
         * Emitted when a menu item is clicked.
         *
         * @event MdMenu#onMenuItemClick
         * @type {Object}
         * @property {CustomEvent} event - The original click event.
         * @property {HTMLElement} menuItem - The clicked menu item element.
         */
        this.emit('onMenuItemClick', {
            event,
            menuItem,
        });
    }
}

// Define the custom element 'md-menu' using the MdMenu class.
customElements.define('md-menu', MdMenu);

export { MdMenu };
