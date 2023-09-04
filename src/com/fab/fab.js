import { html } from "lit";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom element for displaying a floating action button (FAB).
 *
 * @extends MdElement
 * @element md-fab
 */
class MdFab extends MdElement {
    /**
     * Properties for the MdFab custom element.
     *
     * @property {string} icon - The icon to be displayed within the FAB.
     * @property {string} label - The label to be displayed within the FAB.
     * @property {boolean} small - Whether the FAB should have a small size.
     * @property {boolean} large - Whether the FAB should have a large size.
     * @property {boolean} extended - Whether the FAB should have extended styling.
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            small: { type: Boolean },
            large: { type: Boolean },
            extended: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdFab.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdFab element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-fab element -->
     * <md-fab icon="add" label="Add" small extended @click="${handleFabClick}"></md-fab>
     */
    render() {
        return html` ${this.icon ? html`<md-icon class="md-fab__icon">${this.icon}</md-icon>` : html``} ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : html``} `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-fab' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    /**
     * Callback invoked when the element's properties are updated.
     * Adds or removes style classes based on property changes.
     * @param {Map} changedProperties - A map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("small")) {
            if (this.small) this.classList.add("md-fab--small");
            else this.classList.remove("md-fab--small");
        }
        if (changedProperties.has("large")) {
            if (this.large) this.classList.add("md-fab--large");
            else this.classList.remove("md-fab--large");
        }
        if (changedProperties.has("extended")) {
            if (this.extended) this.classList.add("md-fab--extended");
            else this.classList.remove("md-fab--extended");
        }
    }

    /**
     * Callback invoked when the element is first updated.
     * Initializes the ripple effect on the FAB element.
     */
    firstUpdated() {
        new Ripple(this, {});
    }
}

/**
 * A custom floating action button (FAB) element.
 *
 * @element md-fab
 * @example
 * <!-- Usage example of the md-fab element -->
 * <md-fab icon="add" label="Add" small extended @click="${handleFabClick}"></md-fab>
 */
customElements.define("md-fab", MdFab);

export { MdFab };
