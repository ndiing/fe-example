import { html } from "lit";
import { MdElement } from "../../lib/element";
import { Ripple } from "../../lib/ripple";

/**
 * Represents a custom button element.
 *
 * @fires MdButton#click - Fired when the button is clicked.
 *
 * @extends MdElement
 * @element md-button
 */
class MdButton extends MdElement {
    /**
     * Properties for the MdButton custom element.
     *
     * @property {string} icon - The icon to be displayed within the button.
     * @property {string} label - The label to be displayed within the button.
     * @property {boolean} elevated - Whether the button should have elevated styling.
     * @property {boolean} filled - Whether the button should have filled styling.
     * @property {boolean} tonal - Whether the button should have tonal styling.
     * @property {boolean} outlined - Whether the button should have outlined styling.
     * @property {string} type - The type attribute for the underlying native button element.
     * @property {boolean} selected - Whether the button is selected or not.
     *
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            elevated: { type: Boolean },
            filled: { type: Boolean },
            tonal: { type: Boolean },
            outlined: { type: Boolean },
            type: { type: String },
            selected: { type: Boolean, reflect: true },
        };
    }

    /**
     * Creates an instance of MdButton.
     * @constructor
     * @example
     * // Create a new button element
     * const button = new MdButton();
     * button.label = "Click me";
     * button.elevated = true;
     * button.addEventListener('click', () => {
     *     console.log('Button clicked');
     * });
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Renders the content of the MdButton element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            ${this.icon ? html`<md-icon class="md-button__icon">${this.icon}</md-icon>` : html``}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : html``}
            <button class="md-button__native" .type="${this.type}"></button>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-button' class to the element's class list.
     * @inheritdoc
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    /**
     * Callback invoked when the element's properties are updated.
     * Adds or removes style classes based on property changes.
     * @param {Map} changedProperties - A map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("elevated")) {
            if (this.elevated) this.classList.add("md-button--elevated");
            else this.classList.remove("md-button--elevated");
        }
        if (changedProperties.has("filled")) {
            if (this.filled) this.classList.add("md-button--filled");
            else this.classList.remove("md-button--filled");
        }
        if (changedProperties.has("tonal")) {
            if (this.tonal) this.classList.add("md-button--tonal");
            else this.classList.remove("md-button--tonal");
        }
        if (changedProperties.has("outlined")) {
            if (this.outlined) this.classList.add("md-button--outlined");
            else this.classList.remove("md-button--outlined");
        }
    }

    /**
     * Retrieves the native button element within the custom button.
     *
     * @returns {HTMLButtonElement|null} The native button element or null if not found.
     */
    get buttonNative() {
        return this.querySelector('.md-button__native');
    }

    /**
     * Callback invoked when the element is first updated.
     * Initializes the Ripple effect for the button.
     */
    firstUpdated() {
        new Ripple(this, {
            handle: this.buttonNative
        });
    }
}

/**
 * A custom button element.
 *
 * @element md-button
 * @fires MdButton#click - Fired when the button is clicked.
 * @example
 * <!-- Usage example of the md-button element -->
 * <md-button label="Click me" elevated></md-button>
 */
customElements.define("md-button", MdButton);

export { MdButton };
