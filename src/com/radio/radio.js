import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdElement } from '../../lib/element';
import { Ripple } from '../../lib/ripple';

/**
 * Represents a custom element for displaying a radio button.
 * Extends the MdElement base class.
 *
 * @extends MdElement
 * @element md-radio
 */
class MdRadio extends MdElement {
    /**
     * Defines the properties of the MdRadio element.
     *
     * @property {string} name - The name attribute of the radio button.
     * @property {boolean} indeterminate - Whether the radio button is in the indeterminate state.
     * @property {boolean} checked - Whether the radio button is checked.
     * @returns {RadioProperties}
     */
    static get properties() {
        return {
            name: { type: String },
            indeterminate: { type: Boolean },
            checked: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdRadio.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdRadio element using lit-html.
     *
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-radio element -->
     * <md-radio name="radioGroup" .checked="${isChecked}" @onRadioNativeInput="${handleRadioInput}"></md-radio>
     */
    render() {
        return html`
            <input type="radio" class="md-radio__native" .name="${ifDefined(this.name)}" .indeterminate="${ifDefined(this.indeterminate)}" .checked="${ifDefined(this.checked)}" @input="${this.handleRadioNativeInput}" />
            <md-icon class="md-radio__icon"></md-icon>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-radio' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-radio');
    }

    /**
     * Handles the input event on the native radio element.
     * Updates the indeterminate and checked properties and emits an event.
     *
     * @param {Event} event - The input event.
     * @fires MdRadio#onRadioNativeInput - Emitted when the native radio is interacted with.
     */
    handleRadioNativeInput(event) {
        this.indeterminate = this.radioNative.indeterminate;
        this.checked = this.radioNative.checked;
        /**
         * Emitted when the native radio is interacted with.
         *
         * @event MdRadio#onRadioNativeInput
         * @type {Object}
         * @property {Event} event - The original input event.
         */
        this.emit('onRadioNativeInput', {
            event,
        });
    }

    /**
     * Returns the native radio element.
     *
     * @returns {HTMLInputElement} The native radio element.
     */
    get radioNative() {
        return this.querySelector('.md-radio__native');
    }

    /**
     * Returns the icon radio element.
     *
     * @returns {HTMLInputElement} The icon radio element.
     */
    get radioIcon() {
        return this.querySelector('.md-radio__icon');
    }

    /**
     * Initializes the Ripple effect on the radio icon.
     */
    firstUpdated() {
        new Ripple(this.radioIcon, {
            handle: this.radioNative,
            bounded: false,
            size: 40 / 24,
        });
    }
}

// Define the custom element 'md-radio' using the MdRadio class.
customElements.define('md-radio', MdRadio);

export { MdRadio };
