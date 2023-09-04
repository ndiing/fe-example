import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying an example.
 * Extends the MdElement base class.
 */
class MdExample extends MdElement {
    /**
     * Defines the properties of the MdExample element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {};
    }

    /**
     * Creates an instance of MdExample.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdExample element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`example`;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-example' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-example');
    }
}

// Define the custom element 'md-example' using the MdExample class.
customElements.define('md-example', MdExample);

export { MdExample };
