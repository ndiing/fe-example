import { html } from "lit";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom element for displaying a chip.
 *
 * @extends MdElement
 * @element md-chip
 */
class MdChip extends MdElement {
    /**
     * Properties for the MdChip custom element.
     *
     * @property {string} icon - The icon to be displayed within the chip.
     * @property {string} label - The label to be displayed within the chip.
     * @property {boolean} selected - Whether the chip is selected.
     *
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            selected: { type: Boolean, reflect: true },
        };
    }

    /**
     * Creates an instance of MdChip.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdChip element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-chip element -->
     * <md-chip icon="favorite" label="Favorite"></md-chip>
     */
    render() {
        return html`
            ${this.icon ? html`<md-icon class="md-chip__icon">${this.icon}</md-icon>` : html``}
            ${this.label ? html`<div class="md-chip__label">${this.label}</div>` : html``}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-chip' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chip");
    }

    /**
     * Callback invoked when the element is first updated.
     * Initializes the Ripple effect for the chip.
     */
    firstUpdated() {
        new Ripple(this, {});
    }
}

/**
 * A custom chip element.
 *
 * @element md-chip
 * @example
 * <!-- Usage example of the md-chip element -->
 * <md-chip icon="favorite" label="Favorite"></md-chip>
 */
customElements.define("md-chip", MdChip);

export { MdChip };
