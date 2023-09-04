import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom element for displaying a switch.
 * Extends the MdElement base class.
 */
class MdSwitch extends MdElement {
    /**
     * Defines the properties of the MdSwitch element.
     * @returns {Object} An object representing the properties of the element.
     * @property {string} name - The name attribute of the switch.
     * @property {boolean} indeterminate - Whether the switch is in the indeterminate state.
     * @property {boolean} checked - Whether the switch is checked.
     */
    static get properties() {
        return {
            name: { type: String },
            indeterminate: { type: Boolean },
            checked: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdSwitch.
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdSwitch element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <input type="checkbox" class="md-switch__native" .name="${ifDefined(this.name)}" .indeterminate="${ifDefined(this.indeterminate)}" .checked="${ifDefined(this.checked)}" @input="${this.handleSwitchNativeInput}" />
            <div class="md-switch__track">
                <div class="md-switch__thumb"></div>
            </div>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-switch' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-switch");
    }

    /**
     * Handles the input event on the native switch element.
     * Updates the indeterminate and checked properties and emits an event.
     * @param {Event} event - The input event.
     * @emit onSwitchNativeInput - Emitted when the native switch is interacted with.
     */
    handleSwitchNativeInput(event) {
        this.indeterminate = this.switchNative.indeterminate;
        this.checked = this.switchNative.checked;
        this.emit("onSwitchNativeInput", {
            event,
        });
    }

    /**
     * Returns the native switch element.
     * @returns {HTMLInputElement} The native switch element.
     */
    get switchNative() {
        return this.querySelector(".md-switch__native");
    }

    /**
     * Returns the thumb switch element.
     * @returns {HTMLInputElement} The thumb switch element.
     */
    get switchThumb() {
        return this.querySelector(".md-switch__thumb");
    }


    firstUpdated() {
        new Ripple(this.switchThumb, {
            handle:this.switchNative,
            bounded:false,
            // size:40/32,
        });
    }
}

/**
 * A custom element for displaying a switch.
 * @element md-switch
 * @fires MdSwitch#onSwitchNativeInput
 * @example
 * // Example usage in HTML:
 * <md-switch name="toggle" checked @onSwitchNativeInput="${handleSwitchInput}"></md-switch>
 * <script>
 *   function handleSwitchInput(event) {
 *       console.log("Switch checked:", event.target.checked);
 *   }
 * </script>
 */
customElements.define("md-switch", MdSwitch);

export { MdSwitch };
