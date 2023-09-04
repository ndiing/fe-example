import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying an snackbar.
 * Extends the MdElement base class.
 */
class MdSnackbar extends MdElement {
    /**
     * Defines the properties of the MdSnackbar element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {};
    }

    /**
     * Creates an instance of MdSnackbar.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdSnackbar element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`snackbar`;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-snackbar' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-snackbar');
    }
}

// Define the custom element 'md-snackbar' using the MdSnackbar class.
customElements.define('md-snackbar', MdSnackbar);

export { MdSnackbar };
