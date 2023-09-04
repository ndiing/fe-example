import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/**
 * Custom element representing a bottom sheet with various content and actions.
 *
 * @fires MdBottomSheet#onBottomSheetIconClick - Fired when an icon in the bottom sheet header is clicked.
 * @fires MdBottomSheet#onBottomSheetButtonClick - Fired when a button in the bottom sheet footer is clicked.
 * @fires MdBottomSheet#onBottomSheetScrimClick - Fired when the scrim overlay of the bottom sheet is clicked.
 *
 * @extends MdElement
 */
class MdBottomSheet extends MdElement {
    /**
     * Properties for the MdBottomSheet custom element.
     *
     * @property {Boolean} open - Determines whether the bottom sheet is open or closed.
     * @property {Array} leadingIcons - An array of icons to be displayed in the leading section of the header.
     * @property {String} label - The label displayed in the header.
     * @property {Array} trailingIcons - An array of icons to be displayed in the trailing section of the header.
     * @property {Array} buttons - An array of button configurations to be displayed in the footer.
     * @property {Array} body - An array of HTML elements to be displayed in the body of the bottom sheet.
     *
     */
    static get properties() {
        return {
            open: { type: Boolean },
            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
            buttons: { type: Array },
            body: { type: Array },
        };
    }

    /**
     * Constructs a new MdBottomSheet instance.
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    /**
     * Renders the content of the MdBottomSheet custom element.
     *
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        return html`
            <div class="md-bottom-sheet__container">
                <!-- Header section -->
                ${this.leadingIcons?.length || this.label || this.trailingIcons?.length
                    ? html`
                        <div class="md-bottom-sheet__header">
                            ${this.leadingIcons?.length
                                ? html`<div class="md-bottom-sheet__icons">${this.leadingIcons?.map(icon => html`<md-icon class="md-bottom-sheet__icon" .interactive="${true}" @click="${this.handleBottomSheetIconClick}">${icon}</md-icon>`)}</div>`
                                : ""}
                            ${this.label ? html`<div class="md-bottom-sheet__label">${this.label}</div>` : ""}
                            ${this.trailingIcons?.length
                                ? html`
                                    <div class="md-bottom-sheet__spacer"></div>
                                    <div class="md-bottom-sheet__icons">${this.trailingIcons?.map(icon => html`<md-icon class="md-bottom-sheet__icon" .interactive="${true}" @click="${this.handleBottomSheetIconClick}">${icon}</md-icon>`)}</div>`
                                : ""}
                        </div>`
                    : ""}
                <!-- Body section -->
                ${this.body ? html`<div class="md-bottom-sheet__body">${this.body}</div>` : ""}
                <!-- Footer section -->
                ${this.buttons?.length
                    ? html`<div class="md-bottom-sheet__footer">${this.buttons?.map(data => html`<md-button .data="${data}" .icon="${ifDefined(data.icon)}" .label="${ifDefined(data.label ?? data)}" .elevated="${ifDefined(data.elevated)}" .filled="${ifDefined(data.filled)}" .tonal="${ifDefined(data.tonal)}" .outlined="${ifDefined(data.outlined)}" .type="${ifDefined(data.type)}" @click="${this.handleBottomSheetButtonClick}"></md-button>`)}</div>`
                    : ""}
            </div>
            <div class="md-bottom-sheet__scrim" @click="${this.handleBottomSheetScrimClick}"></div>
        `;
    }

    /**
     * Invoked when the element is added to the DOM.
     *
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-sheet");
    }

    /**
     * Invoked when the element's properties are updated.
     *
     * @param {Map<String | Number | Symbol, any>} changedProperties - A map of changed properties.
     * @override
     */
    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) this.classList.add("md-bottom-sheet--open");
            else this.classList.remove("md-bottom-sheet--open");
        }
    }

    /**
     * Handles the click event on a bottom sheet icon.
     *
     * @param {MouseEvent} event - The click event.
     */
    handleBottomSheetIconClick(event) {
        const icon = event.currentTarget;
        this.emit("onBottomSheetIconClick", {
            event,
            icon,
        });
    }

    /**
     * Handles the click event on a bottom sheet button.
     *
     * @param {MouseEvent} event - The click event.
     */
    handleBottomSheetButtonClick(event) {
        const button = event.currentTarget;
        this.emit("onBottomSheetButtonClick", {
            event,
            button,
        });
    }

    /**
     * Shows the bottom sheet.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the bottom sheet.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the bottom sheet.
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * Handles the click event on the bottom sheet scrim overlay.
     *
     * @param {MouseEvent} event - The click event.
     */
    handleBottomSheetScrimClick(event) {
        this.close();
        this.emit("onBottomSheetScrimClick", {
            event,
        });
    }
}

// Define the custom element
customElements.define("md-bottom-sheet", MdBottomSheet);

export { MdBottomSheet };
