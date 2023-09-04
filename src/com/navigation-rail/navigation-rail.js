import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdElement } from '../../lib/element';

/**
 * Custom element representing a navigation-rail with various content and actions.
 *
 * @fires MdNavigationRail#onNavigationRailIconClick - Fired when an icon in the navigation-rail header is clicked.
 * @fires MdNavigationRail#onNavigationRailButtonClick - Fired when a button in the navigation-rail footer is clicked.
 *
 * @extends MdElement
 * @element md-navigation-rail
 */
class MdNavigationRail extends MdElement {
    /**
     * Properties for the MdNavigationRail custom element.
     *
     * @readonly
     * @static
     * @type {Object}
     * @property {Array<String>} leadingIcons - An array of leading icons to be displayed in the navigation-rail header.
     * @property {String} label - The label for the navigation-rail.
     * @property {Array<String>} trailingIcons - An array of trailing icons to be displayed in the navigation-rail header.
     * @property {Array<NavigationRailButton>} buttons - An array of buttons to be displayed in the navigation-rail footer.
     * @property {Array<Node>} body - An array of content elements to be displayed in the navigation-rail body.
     */
    static get properties() {
        return {
            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
            buttons: { type: Array },
            body: { type: Array },
        };
    }

    /**
     * Constructs a new MdNavigationRail instance.
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
     * Renders the content of the MdNavigationRail custom element using lit-html.
     *
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <!-- NavigationRail Header -->
            ${this.leadingIcons?.length || this.label || this.trailingIcons?.length
                ? html`
                        <div class="md-navigation-rail__header">
                            ${this.leadingIcons?.length
                                ? html`<div class="md-navigation-rail__icons">${this.leadingIcons?.map((data) => html`<md-icon class="md-navigation-rail__icon" .interactive="${true}" @click="${this.handleNavigationRailIconClick}">${data}</md-icon>`)}</div>`
                                : ''}
                            ${this.label ? html`<div class="md-navigation-rail__label">${this.label}</div>` : ''}
                            ${this.trailingIcons?.length
                                ? html`
                                    <div class="md-navigation-rail__spacer"></div>
                                    <div class="md-navigation-rail__icons">${this.trailingIcons?.map((data) => html`<md-icon class="md-navigation-rail__icon" .interactive="${true}" @click="${this.handleNavigationRailIconClick}">${data}</md-icon>`)}</div>`
                                : ''}
                        </div>`
                : ''}
            <!-- NavigationRail Body -->
            <div class="md-navigation-rail__body">
                <md-list 
                    class="md-list--navigation-rail"
                    .selectable="${true}"
                    .data="${this.data}">
                </md-list>
            </div>
            <!-- NavigationRail Footer -->
            ${this.buttons?.length ? html`<div class="md-navigation-rail__footer">${this.buttons?.map((data) => html`<md-button .data="${data}" .icon="${ifDefined(data.icon)}" .label="${ifDefined(data.label ?? data)}" .elevated="${ifDefined(data.elevated)}" .filled="${ifDefined(data.filled)}" .tonal="${ifDefined(data.tonal)}" .outlined="${ifDefined(data.outlined)}" .type="${ifDefined(data.type)}" @click="${this.handleNavigationRailButtonClick}"></md-button>`)}</div>` : ''}
        `;
    }

    /**
     * Invoked when the element is added to the DOM.
     *
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-navigation-rail');
    }

    /**
     * Handles the click event on a navigation-rail icon.
     *
     * @param {MouseEvent} event - The click event.
     * @fires MdNavigationRail#onNavigationRailIconClick
     */
    handleNavigationRailIconClick(event) {
        const icon = event.currentTarget;
        this.emit('onNavigationRailIconClick', {
            event,
            icon,
        });
    }

    /**
     * Handles the click event on a navigation-rail button.
     *
     * @param {MouseEvent} event - The click event.
     * @fires MdNavigationRail#onNavigationRailButtonClick
     */
    handleNavigationRailButtonClick(event) {
        const button = event.currentTarget;
        this.emit('onNavigationRailButtonClick', {
            event,
            button,
        });
    }
}

// Define the custom element 'md-navigation-rail' using the MdNavigationRail class.
customElements.define('md-navigation-rail', MdNavigationRail);

export { MdNavigationRail };
