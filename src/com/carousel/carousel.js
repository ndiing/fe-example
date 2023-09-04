import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying an carousel.
 * Extends the MdElement base class.
 */
class MdCarousel extends MdElement {
    /**
     * Defines the properties of the MdCarousel element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {};
    }

    /**
     * Creates an instance of MdCarousel.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdCarousel element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`carousel`;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-carousel' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-carousel');
    }
}

// Define the custom element 'md-carousel' using the MdCarousel class.
customElements.define('md-carousel', MdCarousel);

export { MdCarousel };
