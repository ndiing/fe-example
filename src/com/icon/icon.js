import { html } from "lit";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom element for displaying an icon.
 *
 * @extends MdElement
 * @element md-icon
 */
class MdIcon extends MdElement {
    /**
     * Properties for the MdIcon custom element.
     *
     * @property {boolean} interactive - Whether the icon should have interactive (clickable) behavior.
     */
    static get properties() {
        return {
            interactive: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdIcon.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdIcon element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-icon element -->
     * <md-icon class="md-custom-icon">favorite</md-icon>
     */
    render() {
        return html``;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-icon' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }

    /**
     * Callback invoked when the element is first updated.
     * Initializes the ripple effect on the icon element if it's interactive.
     */
    firstUpdated() {
        if (this.interactive) {
            new Ripple(this, {
                bounded: false,
                size: 40 / 24,
            });
        }
    }
}

/**
 * A custom icon element.
 *
 * @element md-icon
 * @example
 * <!-- Usage example of the md-icon element -->
 * <md-icon class="md-custom-icon">favorite</md-icon>
 */
customElements.define("md-icon", MdIcon);

export { MdIcon };
