import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying an search.
 * Extends the MdElement base class.
 */
class MdSearch extends MdElement {
    /**
     * Defines the properties of the MdSearch element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {};
    }

    /**
     * Creates an instance of MdSearch.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdSearch element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`search`;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-search' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-search');
    }
}

// Define the custom element 'md-search' using the MdSearch class.
customElements.define('md-search', MdSearch);

export { MdSearch };
