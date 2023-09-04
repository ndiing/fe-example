import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdElement } from '../../lib/element';

/**
 * Custom element representing a navigation-drawer with various content and actions.
 *
 * @fires MdNavigationDrawer#onNavigationDrawerIconClick - Fired when an icon in the navigation-drawer header is clicked.
 * @fires MdNavigationDrawer#onNavigationDrawerButtonClick - Fired when a button in the navigation-drawer footer is clicked.
 * @fires MdNavigationDrawer#onNavigationDrawerScrimClick - Fired when the scrim overlay of the navigation-drawer is clicked.
 *
 * @extends MdElement
 * @element md-navigation-drawer
 */
class MdNavigationDrawer extends MdElement {
    /**
     * Properties for the MdNavigationDrawer custom element.
     *
     * @readonly
     * @static
     * @type {Object}
     * @property {Boolean} modal - Determines whether the navigation-drawer should be displayed in full-screen mode.
     * @property {Boolean} open - Determines whether the navigation-drawer is open.
     * @property {Array<String>} leadingIcons - An array of leading icons to be displayed in the navigation-drawer header.
     * @property {String} label - The label for the navigation-drawer.
     * @property {Array<String>} trailingIcons - An array of trailing icons to be displayed in the navigation-drawer header.
     * @property {Array<NavigationDrawerButton>} buttons - An array of buttons to be displayed in the navigation-drawer footer.
     * @property {Array<Node>} body - An array of content elements to be displayed in the navigation-drawer body.
     */
    static get properties() {
        return {
            modal: { type: Boolean },
            open: { type: Boolean },
            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
            buttons: { type: Array },
            body: { type: Array },
        };
    }

    /**
     * Constructs a new MdNavigationDrawer instance.
     *
     * @constructor
     */
    constructor() {
        super();
        /**
         * An array of content elements extracted from child nodes.
         *
         * @type {Array<Node>}
         */
        this.body = Array.from(this.childNodes);
        // this.innerHTML = "";
    }

    /**
     * Renders the content of the MdNavigationDrawer custom element using lit-html.
     *
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <div class="md-navigation-drawer__container">
                <!-- NavigationDrawer Header -->
                ${this.leadingIcons?.length || this.label || this.trailingIcons?.length
                    ? html`
                          <div class="md-navigation-drawer__header">
                              ${this.leadingIcons?.length ? html`<div class="md-navigation-drawer__icons">${this.leadingIcons?.map((data) => html`<md-icon class="md-navigation-drawer__icon" .interactive="${true}" @click="${this.handleNavigationDrawerIconClick}">${data}</md-icon>`)}</div>` : ''}
                              ${this.label ? html`<div class="md-navigation-drawer__label">${this.label}</div>` : ''}
                              ${this.trailingIcons?.length
                                  ? html`
                                        <div class="md-navigation-drawer__spacer"></div>
                                        <div class="md-navigation-drawer__icons">${this.trailingIcons?.map((data) => html`<md-icon class="md-navigation-drawer__icon" .interactive="${true}" @click="${this.handleNavigationDrawerIconClick}">${data}</md-icon>`)}</div>
                                    `
                                  : ''}
                          </div>
                      `
                    : ''}
                <!-- NavigationDrawer Body -->
                <div class="md-navigation-drawer__body">
                    <md-list 
                        class="md-list--navigation-drawer"
                        .selectable="${true}"
                        .data="${this.data}"
                        @click="${this.handleNavigationDrawerItemClick}"
                    >
                    </md-list>
                </div>
                <!-- NavigationDrawer Footer -->
                ${this.buttons?.length ? html`<div class="md-navigation-drawer__footer">${this.buttons?.map((data) => html`<md-button .data="${data}" .icon="${ifDefined(data.icon)}" .label="${ifDefined(data.label ?? data)}" .elevated="${ifDefined(data.elevated)}" .filled="${ifDefined(data.filled)}" .tonal="${ifDefined(data.tonal)}" .outlined="${ifDefined(data.outlined)}" .type="${ifDefined(data.type)}" @click="${this.handleNavigationDrawerButtonClick}"></md-button>`)}</div>` : ''}
            </div>
            <!-- NavigationDrawer Scrim -->
            <div class="md-navigation-drawer__scrim" @click="${this.handleNavigationDrawerScrimClick}"></div>
        `;
    }

    /**
     * Invoked when the element is added to the DOM.
     *
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-navigation-drawer');
    }

    /**
     * Invoked when the element's properties are updated.
     *
     * @param {Map<String | Number | Symbol, any>} changedProperties - A map of changed properties.
     * @override
     */
    updated(changedProperties) {
        if (changedProperties.has('modal')) {
            if (this.modal) this.classList.add('md-navigation-drawer--modal');
            else this.classList.remove('md-navigation-drawer--modal');
        }
        if (changedProperties.has('open')) {
            if (this.open) this.classList.add('md-navigation-drawer--open');
            else this.classList.remove('md-navigation-drawer--open');
        }
    }

    /**
     * Handles the click event on a navigation-drawer icon.
     *
     * @param {MouseEvent} event - The click event.
     * @fires MdNavigationDrawer#onNavigationDrawerIconClick
     */
    handleNavigationDrawerIconClick(event) {
        const icon = event.currentTarget;
        this.emit('onNavigationDrawerIconClick', {
            event,
            icon,
        });
    }

    /**
     * Handles the click event on a navigation-drawer button.
     *
     * @param {MouseEvent} event - The click event.
     * @fires MdNavigationDrawer#onNavigationDrawerButtonClick
     */
    handleNavigationDrawerButtonClick(event) {
        const button = event.currentTarget;
        this.emit('onNavigationDrawerButtonClick', {
            event,
            button,
        });
    }

    /**
     * Shows the navigation-drawer.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the navigation-drawer.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the navigation-drawer.
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * Handles the click event on the navigation-drawer scrim.
     *
     * @param {MouseEvent} event - The click event.
     * @fires MdNavigationDrawer#onNavigationDrawerScrimClick
     */
    handleNavigationDrawerScrimClick(event) {
        this.close();
        this.emit('onNavigationDrawerScrimClick', {
            event,
        });
    }

    /**
     * Handles the click event on the navigation-drawer item.
     *
     * @param {CustomEvent} event - The click event.
     * @fires MdNavigationDrawer#handleNavigationDrawerItemClick
     */
    handleNavigationDrawerItemClick(event) {
        const listItem = event.detail.listItem;
        if (this.modal) this.close();
        this.emit('handleNavigationDrawerItemClick', {
            event,
            navigationDrawerItem: listItem,
        });
    }
}

// Define the custom element 'md-navigation-drawer' using the MdNavigationDrawer class.
customElements.define('md-navigation-drawer', MdNavigationDrawer);

export { MdNavigationDrawer };
