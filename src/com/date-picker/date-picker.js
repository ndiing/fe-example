import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying an date-picker.
 * Extends the MdElement base class.
 */
class MdDatePicker extends MdElement {
    /**
     * Defines the properties of the MdDatePicker element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {};
    }

    /**
     * Creates an instance of MdDatePicker.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdDatePicker element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`date-picker`;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-date-picker' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-date-picker');
    }
}

// Define the custom element 'md-date-picker' using the MdDatePicker class.
customElements.define('md-date-picker', MdDatePicker);

export { MdDatePicker };
