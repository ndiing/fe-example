import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying an time-picker.
 * Extends the MdElement base class.
 */
class MdTimePicker extends MdElement {
    /**
     * Defines the properties of the MdTimePicker element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {};
    }

    /**
     * Creates an instance of MdTimePicker.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdTimePicker element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`time-picker`;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-time-picker' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-time-picker');
    }
}

// Define the custom element 'md-time-picker' using the MdTimePicker class.
customElements.define('md-time-picker', MdTimePicker);

export { MdTimePicker };
