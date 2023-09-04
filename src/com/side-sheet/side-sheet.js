import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/**
 * Custom element representing a side-sheet with various content and actions.
 *
 * @fires MdSideSheet#onSideSheetIconClick - Fired when an icon in the side-sheet header is clicked.
 * @fires MdSideSheet#onSideSheetButtonClick - Fired when a button in the side-sheet footer is clicked.
 * @fires MdSideSheet#onSideSheetScrimClick - Fired when the scrim overlay of the side-sheet is clicked.
 *
 * @extends MdElement
 * @element md-side-sheet
 */
class MdSideSheet extends MdElement {
    /**
     * Properties for the MdSideSheet custom element.
     *
     * @readonly
     * @static
     * @type {Object}
     * @property {Boolean} modal - Determines whether the side-sheet should be displayed in full-screen mode.
     * @property {Boolean} open - Determines whether the side-sheet is open.
     * @property {Array<String>} leadingIcons - An array of leading icons to be displayed in the side-sheet header.
     * @property {String} label - The label for the side-sheet.
     * @property {Array<String>} trailingIcons - An array of trailing icons to be displayed in the side-sheet header.
     * @property {Array<SideSheetButton>} buttons - An array of buttons to be displayed in the side-sheet footer.
     * @property {Array<Node>} body - An array of content elements to be displayed in the side-sheet body.
     */
    static get properties() {
        return {
            modal: { type: Boolean },
            open: { type: Boolean },
            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
            buttons: { type: Array },
            body: { type: Array },
        };
    }

    /**
     * Constructs a new MdSideSheet instance.
     *
     * @constructor
     */
    constructor() {
        super();
        /**
         * An array of content elements extracted from child nodes.
         *
         * @type {Array<Node>}
         */
        this.body = Array.from(this.childNodes);
        // this.innerHTML = "";
    }

    /**
     * Renders the content of the MdSideSheet custom element using lit-html.
     *
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <div class="md-side-sheet__container">
                <!-- SideSheet Header -->
                ${this.leadingIcons?.length || this.label || this.trailingIcons?.length
                    ? html`
                          <div class="md-side-sheet__header">
                              ${this.leadingIcons?.length ? html` <div class="md-side-sheet__icons">${this.leadingIcons?.map((data) => html` <md-icon class="md-side-sheet__icon" .interactive="${true}" @click="${this.handleSideSheetIconClick}">${data}</md-icon> `)}</div> ` : ""} 
                              ${this.label ? html`<div class="md-side-sheet__label">${this.label}</div>` : ""}
                              ${this.trailingIcons?.length
                                  ? html`
                                        <div class="md-side-sheet__spacer"></div>
                                        <div class="md-side-sheet__icons">${this.trailingIcons?.map((data) => html` <md-icon class="md-side-sheet__icon" .interactive="${true}" @click="${this.handleSideSheetIconClick}">${data}</md-icon> `)}</div>
                                    `
                                  : ""}
                          </div>
                      `
                    : ""}
                <!-- SideSheet Body -->
                ${this.body ? html`<div class="md-side-sheet__body">${this.body}</div>` : ""}
                <!-- SideSheet Footer -->
                ${this.buttons?.length ? html` <div class="md-side-sheet__footer">${this.buttons?.map((data) => html` <md-button .data="${data}" .icon="${ifDefined(data.icon)}" .label="${ifDefined(data.label ?? data)}" .elevated="${ifDefined(data.elevated)}" .filled="${ifDefined(data.filled)}" .tonal="${ifDefined(data.tonal)}" .outlined="${ifDefined(data.outlined)}" .type="${ifDefined(data.type)}" @click="${this.handleSideSheetButtonClick}"></md-button> `)}</div> ` : ""}
            </div>
            <!-- SideSheet Scrim -->
            <div class="md-side-sheet__scrim" @click="${this.handleSideSheetScrimClick}"></div>
        `;
    }

    /**
     * Invoked when the element is added to the DOM.
     *
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-side-sheet");
    }

    /**
     * Invoked when the element's properties are updated.
     *
     * @param {Map<String | Number | Symbol, any>} changedProperties - A map of changed properties.
     * @override
     */
    updated(changedProperties) {
        if (changedProperties.has("modal")) {
            if (this.modal) this.classList.add("md-side-sheet--modal");
            else this.classList.remove("md-side-sheet--modal");
        }
        if (changedProperties.has("open")) {
            if (this.open) this.classList.add("md-side-sheet--open");
            else this.classList.remove("md-side-sheet--open");
        }
    }

    /**
     * Handles the click event on a side-sheet icon.
     *
     * @param {MouseEvent} event - The click event.
     */
    handleSideSheetIconClick(event) {
        const icon = event.currentTarget;
        this.emit("onSideSheetIconClick", {
            event,
            icon,
        });
    }

    /**
     * Handles the click event on a side-sheet button.
     *
     * @param {MouseEvent} event - The click event.
     */
    handleSideSheetButtonClick(event) {
        const button = event.currentTarget;
        this.emit("onSideSheetButtonClick", {
            event,
            button,
        });
    }

    /**
     * Shows the side-sheet.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the side-sheet.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the side-sheet.
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * Handles the click event on the side-sheet scrim.
     *
     * @param {MouseEvent} event - The click event.
     */
    handleSideSheetScrimClick(event) {
        this.close();
        this.emit("onSideSheetScrimClick", {
            event,
        });
    }
}

// Define the custom element 'md-side-sheet' using the MdSideSheet class.
customElements.define("md-side-sheet", MdSideSheet);

export { MdSideSheet };
