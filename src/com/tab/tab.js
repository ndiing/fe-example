import { html } from "lit";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom element for displaying a tab.
 * Extends the MdElement base class.
 * @extends MdElement
 * @element md-tab
 * @fires MdTab#onTabSelected
 */
class MdTab extends MdElement {
    /**
     * Defines the properties of the MdTab element.
     * @returns {Object} An object representing the properties of the element.
     * @property {string} icon - The icon to be displayed within the tab.
     * @property {string} label - The label to be displayed within the tab.
     * @property {boolean} selected - Whether the tab is selected.
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            selected: { type: Boolean, reflect: true },
        };
    }

    /**
     * Creates an instance of MdTab.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdTab element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html` ${this.icon ? html`<md-icon class="md-tab__icon">${this.icon}</md-icon>` : html``} ${this.label ? html`<div class="md-tab__label">${this.label}</div>` : html``} `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-tab' class to the element's class list.
     * @inheritdoc
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tab");
    }

    /**
     * Returns the tab's icon element.
     * @returns {HTMLElement} The tab's icon element.
     */
    get tabIcon() {
        return this.querySelector(".md-tab__icon");
    }

    /**
     * Returns the tab's label element.
     * @returns {HTMLElement} The tab's label element.
     */
    get tabLabel() {
        return this.querySelector(".md-tab__label");
    }

    /**
     * Callback invoked when the element's properties are updated.
     * Emits the 'onTabSelected' event when the 'selected' property changes.
     * @fires MdTab#onTabSelected
     * @param {Map} changedProperties - A map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) this.emit("onTabSelected", { tab: this });
        }
    }

    firstUpdated() {
        new Ripple(this, {});
    }
}

/**
 * A custom element for displaying a tab.
 * @element md-tab
 * @fires MdTab#onTabSelected
 * @example
 * <!-- Example usage in HTML: -->
 * <md-tab icon="home" label="Home" selected @onTabSelected="${handleTabSelected}"></md-tab>
 * <md-tab icon="settings" label="Settings" @onTabSelected="${handleTabSelected}"></md-tab>
 * <script>
 *   function handleTabSelected(event) {
 *       console.log("Tab selected:", event.detail.tab.label);
 *   }
 * </script>
 */
customElements.define("md-tab", MdTab);

export { MdTab };
