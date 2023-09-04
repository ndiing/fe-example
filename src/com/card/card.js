import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying a card.
 * Extends the MdElement base class.
 *
 * @element md-card
 */
class MdCard extends MdElement {
    /**
     * Properties for the MdCard custom element.
     *
     * @property {boolean} elevated - Whether the card should have elevated styling.
     * @property {boolean} filled - Whether the card should have filled styling.
     * @property {boolean} outlined - Whether the card should have outlined styling.
     *
     */
    static get properties() {
        return {
            elevated: { type: Boolean },
            filled: { type: Boolean },
            outlined: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdCard.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdCard element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html``;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-card' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }

    /**
     * Callback invoked when the element's properties are updated.
     * Adds or removes style classes based on property changes.
     * @param {Map} changedProperties - A map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("elevated")) {
            if (this.elevated) this.classList.add("md-card--elevated");
            else this.classList.remove("md-card--elevated");
        }
        if (changedProperties.has("filled")) {
            if (this.filled) this.classList.add("md-card--filled");
            else this.classList.remove("md-card--filled");
        }
        if (changedProperties.has("outlined")) {
            if (this.outlined) this.classList.add("md-card--outlined");
            else this.classList.remove("md-card--outlined");
        }
    }
}

/**
 * A custom card element.
 * @element md-card
 */
customElements.define("md-card", MdCard);

export { MdCard };
