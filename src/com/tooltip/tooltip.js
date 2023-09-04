import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";
import { setPosition } from "../../lib/popover";

/**
 * Represents a custom element for displaying a tooltip.
 * Extends the MdElement base class.
 * @extends MdElement
 * @element md-tooltip
 */
class MdTooltip extends MdElement {
    /**
     * Defines the properties of the MdTooltip element.
     * @property {boolean} [rich] - Determines whether the tooltip should be displayed in full-screen mode.
     * @property {boolean} [open] - Determines whether the tooltip is open.
     * @property {Array<string>} [leadingIcons] - An array of leading icons to be displayed in the tooltip header.
     * @property {string} [label] - The label for the tooltip.
     * @property {Array<string>} [trailingIcons] - An array of trailing icons to be displayed in the tooltip header.
     * @property {Array<TooltipButton>} [buttons] - An array of buttons to be displayed in the tooltip footer.
     * @property {Array<Node>} [body] - An array of content elements to be displayed in the tooltip body.
     * @returns {TooltipProperties}
     */
    static get properties() {
        return {
            rich: { type: Boolean },
            open: { type: Boolean },
            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
            buttons: { type: Array },
            body: { type: Array },
        };
    }

    /**
     * Creates an instance of MdTooltip.
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
     * Renders the content of the MdTooltip element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-tooltip element -->
     * <md-tooltip rich open .leadingIcons="${leadingIcons}" label="Tooltip Title" .trailingIcons="${trailingIcons}" .buttons="${tooltipButtons}" @onTooltipButtonClick="${handleTooltipButtonClick}">
     *   <p>This is the tooltip content.</p>
     * </md-tooltip>
     */
    render() {
        return html`
            <div class="md-tooltip__container">
                <!-- Tooltip Header -->
                ${this.leadingIcons?.length || this.label || this.trailingIcons?.length
                    ? html`
                          <div class="md-tooltip__header">
                              ${this.leadingIcons?.length ? html` <div class="md-tooltip__icons">${this.leadingIcons?.map((data) => html` <md-icon class="md-tooltip__icon" .interactive="${true}" @click="${this.handleTooltipIconClick}">${data}</md-icon> `)}</div> ` : ""} 
                              ${this.label ? html`<div class="md-tooltip__label">${this.label}</div>` : ""}
                              ${this.trailingIcons?.length
                                  ? html`
                                        <div class="md-tooltip__spacer"></div>
                                        <div class="md-tooltip__icons">${this.trailingIcons?.map((data) => html` <md-icon class="md-tooltip__icon" .interactive="${true}" @click="${this.handleTooltipIconClick}">${data}</md-icon> `)}</div>
                                    `
                                  : ""}
                          </div>
                      `
                    : ""}
                <!-- Tooltip Body -->
                ${this.body ? html`<div class="md-tooltip__body">${this.body}</div>` : ""}
                <!-- Tooltip Footer -->
                ${this.buttons?.length ? html` <div class="md-tooltip__footer">${this.buttons?.map((data) => html` <md-button .data="${data}" .icon="${ifDefined(data.icon)}" .label="${ifDefined(data.label ?? data)}" .elevated="${ifDefined(data.elevated)}" .filled="${ifDefined(data.filled)}" .tonal="${ifDefined(data.tonal)}" .outlined="${ifDefined(data.outlined)}" .type="${ifDefined(data.type)}" @click="${this.handleTooltipButtonClick}"></md-button> `)}</div> ` : ""}
            </div>
            <!-- Tooltip Scrim -->
            <div class="md-tooltip__scrim" @click="${this.handleTooltipScrimClick}"></div>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-tooltip' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
    }

    /**
     * Called when properties are updated.
     * @param {Map<string | number | symbol, unknown>} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("rich")) {
            if (this.rich) this.classList.add("md-tooltip--rich");
            else this.classList.remove("md-tooltip--rich");
        }
        if (changedProperties.has("open")) {
            if (this.open) this.classList.add("md-tooltip--open");
            else this.classList.remove("md-tooltip--open");
        }
    }

    /**
     * Handles the click event on a tooltip icon.
     * @param {MouseEvent} event - The click event.
     * @fires MdTooltip#onTooltipIconClick
     */
    handleTooltipIconClick(event) {
        const icon = event.currentTarget;
        /**
         * Emitted when a tooltip icon is clicked.
         * @event MdTooltip#onTooltipIconClick
         * @type {Object}
         * @property {MouseEvent} event - The original click event.
         * @property {HTMLElement} icon - The clicked icon element.
         */
        this.emit("onTooltipIconClick", {
            event,
            icon,
        });
    }

    /**
     * Handles the click event on a tooltip button.
     * @param {MouseEvent} event - The click event.
     * @fires MdTooltip#onTooltipButtonClick
     */
    handleTooltipButtonClick(event) {
        const button = event.currentTarget;
        /**
         * Emitted when a tooltip button is clicked.
         * @event MdTooltip#onTooltipButtonClick
         * @type {Object}
         * @property {MouseEvent} event - The original click event.
         * @property {HTMLElement} button - The clicked button element.
         */
        this.emit("onTooltipButtonClick", {
            event,
            button,
        });
    }

    /**
     * Gets the tooltip container element.
     *
     * @returns {HTMLElement} The tooltip container element.
     */
    get tooltipContainer() {
        return this.querySelector(".md-tooltip__container");
    }

    /**
     * Shows the tooltip.
     */
    show(options={}) {
        setPosition(Object.assign({ placement: "bottom", offset:8 }, options, { container: this.tooltipContainer }));
        this.open = true;
    }

    /**
     * Closes the tooltip.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the visibility of the tooltip.
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * Handles the click event on the tooltip scrim.
     * @param {MouseEvent} event - The click event.
     * @fires MdTooltip#onTooltipScrimClick
     */
    handleTooltipScrimClick(event) {
        this.close();
        /**
         * Emitted when the tooltip scrim is clicked.
         * @event MdTooltip#onTooltipScrimClick
         * @type {Object}
         * @property {MouseEvent} event - The original click event.
         */
        this.emit("onTooltipScrimClick", {
            event,
        });
    }
}

// Define the custom element 'md-tooltip' using the MdTooltip class.
customElements.define("md-tooltip", MdTooltip);

export { MdTooltip };
