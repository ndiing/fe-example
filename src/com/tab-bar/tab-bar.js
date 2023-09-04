import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying a tab bar.
 * Extends the MdElement base class.
 * @extends MdElement
 * @element md-tab-bar
 * @fires MdTabBar#onTabClick
 */
class MdTabBar extends MdElement {
    /**
     * Defines the properties of the MdTabBar element.
     * @returns {Object} An object representing the properties of the element.
     * @property {Array<Object>} data - An array of data objects representing each tab.
     */
    static get properties() {
        return {
            data: { type: Array },
        };
    }

    /**
     * Creates an instance of MdTabBar.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdTabBar element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            ${this.data?.map((data) => html`
                <md-tab
                    .data="${data}"
                    .icon="${data.icon}"
                    .label="${data.label}"
                    .selected="${data.selected}"
                    @click="${this.handleTabClick}"
                    @onTabSelected="${this.handleTabSelected}"
                ></md-tab>
            `)}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-tab-bar' class to the element's class list.
     * @inheritdoc
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tab-bar");
    }

    /**
     * Handles the click event when a tab is clicked.
     * @fires MdTabBar#onTabClick
     * @param {Event} event - The click event.
     */
    handleTabClick(event) {
        const tab = event.currentTarget;

        for (const data of this.data) {
            data.selected = data === tab.data;
        }
        this.requestUpdate();

        this.emit("onTabClick", {
            event,
            tab,
        });
    }

    /**
     * Handles the "onTabSelected" event from a tab element.
     * Sets the CSS variables for tab indicator width and position.
     * @param {CustomEvent} event - The "onTabSelected" event.
     */
    handleTabSelected(event) {
        const tab = event.detail.tab;
        const element = tab.tabLabel || tab.tabIcon;
        const width=element.clientWidth
        const left=tab.offsetLeft+element.offsetLeft
        this.style.setProperty("--md-tab-indicator-width", width + "px");
        this.style.setProperty("--md-tab-indicator-left", left + "px");
    }
}

/**
 * A custom element for displaying a tab bar.
 * @element md-tab-bar
 * @fires MdTabBar#onTabClick
 * @example
 * <!-- Example usage in HTML: -->
 * <md-tab-bar data="${JSON.stringify(tabData)}" @onTabClick="${handleTabClick}"></md-tab-bar>
 * <script>
 *   const tabData = [
 *     { icon: "home", label: "Home", selected: true },
 *     { icon: "settings", label: "Settings", selected: false },
 *     // ... additional tab data
 *   ];
 *
 *   function handleTabClick(event) {
 *       console.log("Tab clicked:", event.detail.tab.label);
 *   }
 * </script>
 */
customElements.define("md-tab-bar", MdTabBar);

export { MdTabBar };
