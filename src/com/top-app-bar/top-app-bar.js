import { html } from "lit";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying a top app bar.
 * Extends the MdElement base class.
 * @extends MdElement
 * @element md-top-app-bar
 * @fires MdTopAppBar#onTopAppBarIconClick
 */
class MdTopAppBar extends MdElement {
    /**
     * Defines the properties of the MdTopAppBar element.
     * @returns {Object} An object representing the properties of the element.
     * @property {Array<string>} leadingIcons - An array of leading icons to be displayed in the top app bar.
     * @property {string} label - The label text to be displayed in the top app bar.
     * @property {Array<string>} trailingIcons - An array of trailing icons to be displayed in the top app bar.
     */
    static get properties() {
        return {
            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
        };
    }

    /**
     * Creates an instance of MdTopAppBar.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdTopAppBar element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            ${this.leadingIcons?.length ? html`
                <div class="md-top-app-bar__icons">${this.leadingIcons?.map((data) => html`
                    <md-icon class="md-top-app-bar__icon" .interactive="${true}" @click="${this.handleTopAppBarIconClick}">${data}</md-icon>
                `)}</div>
            ` : ""}

            ${this.label ? html`<div class="md-top-app-bar__label">${this.label}</div>` : ""}

            ${this.trailingIcons?.length ? html`
                <div class="md-top-app-bar__spacer"></div>
                <div class="md-top-app-bar__icons">${this.trailingIcons?.map((data) => html`
                    <md-icon class="md-top-app-bar__icon" .interactive="${true}" @click="${this.handleTopAppBarIconClick}">${data}</md-icon>
                `)}</div>
            ` : ""}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-top-app-bar' class to the element's class list.
     * @inheritdoc
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-top-app-bar");
    }

    /**
     * Handles the click event when a top app bar icon is clicked.
     * @fires MdTopAppBar#onTopAppBarIconClick
     * @param {Event} event - The click event.
     */
    handleTopAppBarIconClick(event) {
        const icon = event.currentTarget;
        this.emit('onTopAppBarIconClick', {
            event,
            icon
        });
    }
}

/**
 * A custom element for displaying a top app bar.
 * @element md-top-app-bar
 * @fires MdTopAppBar#onTopAppBarIconClick
 * @example
 * <!-- Example usage in HTML: -->
 * <md-top-app-bar
 *     .leadingIcons="${['menu', 'search']}"
 *     label="My App"
 *     .trailingIcons="${['notifications', 'account_circle']}"
 *     @onTopAppBarIconClick="${handleTopAppBarIconClick}">
 * </md-top-app-bar>
 * <script>
 *   function handleTopAppBarIconClick(event) {
 *       console.log("Top app bar icon clicked:", event.detail.icon);
 *   }
 * </script>
 */
customElements.define("md-top-app-bar", MdTopAppBar);

export { MdTopAppBar };
