import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying a dialog.
 *
 * @fires MdDialog#onDialogIconClick - Fired when a dialog icon is clicked.
 * @fires MdDialog#onDialogButtonClick - Fired when a dialog button is clicked.
 * @fires MdDialog#onDialogScrimClick - Fired when the dialog scrim is clicked.
 *
 * @extends MdElement
 * @element md-dialog
 */
class MdDialog extends MdElement {
    /**
     * Properties for the MdDialog custom element.
     *
     * @property {boolean} [fullScreen] - Determines whether the dialog should be displayed in full-screen mode.
     * @property {boolean} [open] - Determines whether the dialog is open.
     * @property {Array<string>} [leadingIcons] - An array of leading icons to be displayed in the dialog header.
     * @property {string} [label] - The label for the dialog.
     * @property {Array<string>} [trailingIcons] - An array of trailing icons to be displayed in the dialog header.
     * @property {Array<DialogButton>} [buttons] - An array of buttons to be displayed in the dialog footer.
     * @property {Array<Node>} [body] - An array of content elements to be displayed in the dialog body.
     */
    static get properties() {
        return {
            fullScreen: { type: Boolean },
            open: { type: Boolean },
            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
            buttons: { type: Array },
            body: { type: Array },
        };
    }

    /**
     * Creates an instance of MdDialog.
     * @constructor
     */
    constructor() {
        super();
        /**
         * An array of content elements extracted from child nodes.
         * @type {Array<Node>}
         */
        this.body = Array.from(this.childNodes);
        // this.innerHTML = "";
    }

    /**
     * Renders the content of the MdDialog element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-dialog element -->
     * <md-dialog fullScreen open .leadingIcons="${leadingIcons}" label="Dialog Title" .trailingIcons="${trailingIcons}" .buttons="${dialogButtons}" @onDialogButtonClick="${handleDialogButtonClick}">
     *   <p>This is the dialog content.</p>
     * </md-dialog>
     */
    render() {
        return html`
            <div class="md-dialog__container">
                <!-- Dialog Header -->
                ${this.leadingIcons?.length || this.label || this.trailingIcons?.length
                    ? html`
                          <div class="md-dialog__header">
                              ${this.leadingIcons?.length ? html` <div class="md-dialog__icons">${this.leadingIcons?.map((data) => html` <md-icon class="md-dialog__icon" .interactive="${true}" @click="${this.handleDialogIconClick}">${data}</md-icon> `)}</div> ` : ""} 
                              ${this.label ? html`<div class="md-dialog__label">${this.label}</div>` : ""}
                              ${this.trailingIcons?.length
                                  ? html`
                                        <div class="md-dialog__spacer"></div>
                                        <div class="md-dialog__icons">${this.trailingIcons?.map((data) => html` <md-icon class="md-dialog__icon" .interactive="${true}" @click="${this.handleDialogIconClick}">${data}</md-icon> `)}</div>
                                    `
                                  : ""}
                          </div>
                      `
                    : ""}
                <!-- Dialog Body -->
                ${this.body ? html`<div class="md-dialog__body">${this.body}</div>` : ""}
                <!-- Dialog Footer -->
                ${this.buttons?.length ? html` <div class="md-dialog__footer">${this.buttons?.map((data) => html` <md-button .data="${data}" .icon="${ifDefined(data.icon)}" .label="${ifDefined(data.label ?? data)}" .elevated="${ifDefined(data.elevated)}" .filled="${ifDefined(data.filled)}" .tonal="${ifDefined(data.tonal)}" .outlined="${ifDefined(data.outlined)}" .type="${ifDefined(data.type)}" @click="${this.handleDialogButtonClick}"></md-button> `)}</div> ` : ""}
            </div>
            <!-- Dialog Scrim -->
            <div class="md-dialog__scrim" @click="${this.handleDialogScrimClick}"></div>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-dialog' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog");
    }

    /**
     * Called when properties are updated.
     * @param {Map<string | number | symbol, unknown>} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("fullScreen")) {
            if (this.fullScreen) this.classList.add("md-dialog--full-screen");
            else this.classList.remove("md-dialog--full-screen");
        }
        if (changedProperties.has("open")) {
            if (this.open) this.classList.add("md-dialog--open");
            else this.classList.remove("md-dialog--open");
        }
    }

    /**
     * Handles the click event on a dialog icon.
     * @param {MouseEvent} event - The click event.
     * @fires MdDialog#onDialogIconClick
     */
    handleDialogIconClick(event) {
        const icon = event.currentTarget;
        /**
         * Emitted when a dialog icon is clicked.
         * @event MdDialog#onDialogIconClick
         * @type {Object}
         * @property {MouseEvent} event - The original click event.
         * @property {HTMLElement} icon - The clicked icon element.
         */
        this.emit("onDialogIconClick", {
            event,
            icon,
        });
    }

    /**
     * Handles the click event on a dialog button.
     * @param {MouseEvent} event - The click event.
     * @fires MdDialog#onDialogButtonClick
     */
    handleDialogButtonClick(event) {
        const button = event.currentTarget;
        /**
         * Emitted when a dialog button is clicked.
         * @event MdDialog#onDialogButtonClick
         * @type {Object}
         * @property {MouseEvent} event - The original click event.
         * @property {HTMLElement} button - The clicked button element.
         */
        this.emit("onDialogButtonClick", {
            event,
            button,
        });
    }

    /**
     * Shows the dialog.
     */
    show() {
        this.open = true;
    }

    /**
     * Closes the dialog.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the dialog.
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * Handles the click event on the dialog scrim.
     * @param {MouseEvent} event - The click event.
     * @fires MdDialog#onDialogScrimClick
     */
    handleDialogScrimClick(event) {
        this.close();
        /**
         * Emitted when the dialog scrim is clicked.
         * @event MdDialog#onDialogScrimClick
         * @type {Object}
         * @property {MouseEvent} event - The original click event.
         */
        this.emit("onDialogScrimClick", {
            event,
        });
    }
}

/**
 * A custom dialog element.
 *
 * @element md-dialog
 * @fires MdDialog#onDialogIconClick - Fired when a dialog icon is clicked.
 * @fires MdDialog#onDialogButtonClick - Fired when a dialog button is clicked.
 * @fires MdDialog#onDialogScrimClick - Fired when the dialog scrim is clicked.
 * @example
 * <!-- Usage example of the md-dialog element -->
 * <md-dialog fullScreen open .leadingIcons="${leadingIcons}" label="Dialog Title" .trailingIcons="${trailingIcons}" .buttons="${dialogButtons}" @onDialogButtonClick="${handleDialogButtonClick}">
 *   <p>This is the dialog content.</p>
 * </md-dialog>
 */
customElements.define("md-dialog", MdDialog);

export { MdDialog };
