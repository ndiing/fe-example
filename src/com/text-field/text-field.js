import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/* 
color
date
datetime-local
email
file
image
month
number
password
search
tel
text
time
url
week
*/

/**
 * Represents a custom element for displaying an text-field.
 * Extends the MdElement base class.
 */
class MdTextField extends MdElement {
    /**
     * Defines the properties of the MdTextField element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {
            type: { type: String },
            name: { type: String },
            value: { type: String },
            defaultValue: { type: String },
            min: { type: Number },
            max: { type: Number },
            minLength: { type: Number },
            maxLength: { type: Number },
            pattern: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            placeholder: { type: String },

            leadingIcons: { type: Array },
            label: { type: String },
            trailingIcons: { type: Array },
            text: { type: String },

            filled: { type: Boolean },
            outlined: { type: Boolean },
            focused: { type: Boolean },
            error: { type: Boolean },
            populated: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdTextField.
     */
    constructor() {
        super();
        this.type = "text";
    }

    /**
     * Renders the content of the MdTextField element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            ${this.label
                ? html`
                      <div class="md-text-field__header">
                          <label class="md-text-field__label">${this.label}</label>
                      </div>
                  `
                : ``}
            <div class="md-text-field__body">
                ${this.leadingIcons?.length ? html`<div class="md-text-field__icons">${this.leadingIcons?.map((data) => html` <md-icon class="md-text-field__icon" .interactive="${true}" @click="${this.handleTextFieldIconClick}">${data}</md-icon> `)}</div>` : ""}
                <input 
                    .type="${ifDefined(this.type)}" 
                    .name="${ifDefined(this.name)}" 
                    .value="${ifDefined(this.value)}" 
                    .defaultValue="${ifDefined(this.defaultValue)}" 
                    .min="${ifDefined(this.min)}" 
                    .max="${ifDefined(this.max)}" 
                    .minLength="${ifDefined(this.minLength)}" 
                    .maxLength="${ifDefined(this.maxLength)}" 
                    .pattern="${ifDefined(this.pattern)}" 
                    .required="${ifDefined(this.required)}" 
                    .readOnly="${ifDefined(this.readOnly)}" 
                    .placeholder="${ifDefined(this.placeholder)}" 
                    class="md-text-field__native" 
                    @input="${this.handleTextFieldNativeInput}" 
                    @invalid="${this.handleTextFieldNativeInvalid}" 
                    @search="${this.handleTextFieldNativeSearch}" 
                    @focus="${this.handleTextFieldNativeFocus}" 
                    @blur="${this.handleTextFieldNativeBlur}" 
                    @onTextFieldNativeReset="${this.handleTextFieldNativeReset}" />
                ${this.trailingIcons?.length ? html`<div class="md-text-field__icons">${this.trailingIcons?.map((data) => html` <md-icon class="md-text-field__icon" .interactive="${true}" @click="${this.handleTextFieldIconClick}">${data}</md-icon> `)}</div>` : ""}
            </div>
            ${this.text
                ? html`
                      <div class="md-text-field__footer">
                          <div class="md-text-field__text">${this.text}</div>
                      </div>
                  `
                : ``}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-text-field' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
    }

    firstUpdated(changedProperties) {
        this.defaultValue = this.value;
    }

    updated(changedProperties) {
        if (changedProperties.has("filled")) {
            if (this.filled) this.classList.add("md-text-field--filled");
            else this.classList.remove("md-text-field--filled");
        }
        if (changedProperties.has("outlined")) {
            if (this.outlined) this.classList.add("md-text-field--outlined");
            else this.classList.remove("md-text-field--outlined");
        }
        if (changedProperties.has("value")) {
            this.populated = !!this.value;
        }
        if (changedProperties.has("populated")) {
            if (this.populated) this.classList.add("md-text-field--populated");
            else this.classList.remove("md-text-field--populated");
        }
        if (changedProperties.has("focused")) {
            if (this.focused) this.classList.add("md-text-field--focused");
            else this.classList.remove("md-text-field--focused");
        }
        if (changedProperties.has("error")) {
            if (this.error) this.classList.add("md-text-field--error");
            else this.classList.remove("md-text-field--error");
        }
    }

    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    handleTextFieldNativeInput(event) {
        this.emit("onTextFieldNativeInput", { event });
    }
    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        // validate
        this.error = !this.textFieldNative.validity.valid;
        this.text = this.textFieldNative.validationMessage;

        this.emit("onTextFieldNativeInvalid", { event });
    }
    handleTextFieldNativeSearch(event) {
        this.emit("onTextFieldNativeSearch", { event });
    }
    handleTextFieldNativeFocus(event) {
        this.focused = true;
        this.emit("onTextFieldNativeFocus", { event });
    }
    handleTextFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTextFieldNativeBlur", { event });
    }
    handleTextFieldIconClick(event) {
        this.emit("onTextFieldIconClick", { event });
    }
    handleTextFieldNativeReset(event) {
        // validate
        this.error = false;
        this.text = undefined;

        this.emit("onTextFieldNativeReset", { event });
    }
}

// Define the custom element 'md-text-field' using the MdTextField class.
customElements.define("md-text-field", MdTextField);

export { MdTextField };
