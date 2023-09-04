import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying a divider.
 * Extends the MdElement base class.
 * @extends MdElement
 * @element md-divider
 */
class MdDivider extends MdElement {
    /**
     * Defines the properties of the MdDivider element.
     * @returns {Object} An empty object since dividers do not have properties.
     */
    static get properties() {
        return {};
    }

    /**
     * Creates an instance of MdDivider.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdDivider element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-divider element -->
     * <md-divider></md-divider>
     */
    render() {
        return html``;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-divider' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-divider');
    }
}

// Define the custom element 'md-divider' using the MdDivider class.
customElements.define('md-divider', MdDivider);

export { MdDivider };
