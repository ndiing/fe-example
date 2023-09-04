import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom element for displaying a checkbox.
 *
 * @fires MdCheckbox#onCheckboxNativeInput - Fired when the native checkbox is interacted with.
 *
 * @extends MdElement
 * @element md-checkbox
 */
class MdCheckbox extends MdElement {
    /**
     * Properties for the MdCheckbox custom element.
     *
     * @property {string} name - The name attribute of the checkbox.
     * @property {boolean} indeterminate - Whether the checkbox is in the indeterminate state.
     * @property {boolean} checked - Whether the checkbox is checked.
     *
     */
    static get properties() {
        return {
            name: { type: String },
            indeterminate: { type: Boolean },
            checked: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdCheckbox.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdCheckbox element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-checkbox element -->
     * <md-checkbox name="myCheckbox" checked></md-checkbox>
     */
    render() {
        return html`
            <input type="checkbox" class="md-checkbox__native" .name="${ifDefined(this.name)}" .indeterminate="${ifDefined(this.indeterminate)}" .checked="${ifDefined(this.checked)}" @input="${this.handleCheckboxNativeInput}" />
            <md-icon class="md-checkbox__icon"></md-icon>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-checkbox' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");
    }

    /**
     * Handles the input event on the native checkbox element.
     * Updates the indeterminate and checked properties and emits an event.
     * @param {Event} event - The input event.
     * @emit onCheckboxNativeInput - Emitted when the native checkbox is interacted with.
     */
    handleCheckboxNativeInput(event) {
        this.indeterminate = this.checkboxNative.indeterminate;
        this.checked = this.checkboxNative.checked;
        this.emit("onCheckboxNativeInput", {
            event,
        });
    }

    /**
     * Returns the native checkbox element.
     * @returns {HTMLInputElement} The native checkbox element.
     */
    get checkboxNative() {
        return this.querySelector(".md-checkbox__native");
    }

    /**
     * Returns the icon checkbox element.
     * @returns {HTMLInputElement} The icon checkbox element.
     */
    get checkboxIcon() {
        return this.querySelector(".md-checkbox__icon");
    }

    /**
     * Callback invoked when the element is first updated.
     * Initializes the Ripple effect for the checkbox icon.
     */
    firstUpdated() {
        new Ripple(this.checkboxIcon, {
            handle: this.checkboxNative,
            bounded: false,
            size: 40 / 24,
        });
    }
}

/**
 * A custom checkbox element.
 *
 * @element md-checkbox
 * @fires MdCheckbox#onCheckboxNativeInput - Fired when the native checkbox is interacted with.
 * @example
 * <!-- Usage example of the md-checkbox element -->
 * <md-checkbox name="myCheckbox" checked></md-checkbox>
 */
customElements.define("md-checkbox", MdCheckbox);

export { MdCheckbox };
