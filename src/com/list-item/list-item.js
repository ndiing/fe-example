/**
 * @module MdListItem
 */

import { html } from "lit";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom element for displaying a list-item.
 * Extends the MdElement base class.
 * @extends MdElement
 */
class MdListItem extends MdElement {
    /**
     * Defines the properties of the MdListItem element.
     * @property {string} icon - The icon for the list-item.
     * @property {string} label - The label text for the list-item.
     * @property {string} routerLink - The router link for the list-item.
     * @property {boolean} selected - Indicates whether the list-item is selected.
     * @returns {Object.<string, ReactiveControllerHost | PropertyDeclaration>} An object representing the properties of the element.
     * @static
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            routerLink: { type: String, reflect: true },
            selected: { type: Boolean, reflect: true },
        };
    }

    /**
     * Creates an instance of MdListItem.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdListItem element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            ${this.icon ? html`<md-icon class="md-list__icon">${this.icon}</md-icon>` : html``}
            ${this.label ? html`<div class="md-list__label">${this.label}</div>` : html``}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-list__item' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-list__item');
    }

    /**
     * Callback invoked when the element's properties are first updated.
     * Initializes the Ripple effect on the element.
     * @param {Map<string | symbol | number, any>} changedProperties - Map of changed properties.
     */
    firstUpdated(changedProperties) {
        new Ripple(this, {
            // Ripple initialization options can be added here
        });
    }
}

// Define the custom element 'md-list-item' using the MdListItem class.
customElements.define('md-list-item', MdListItem);

export { MdListItem };
