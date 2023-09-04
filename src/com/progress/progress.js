import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying progress.
 * @extends MdElement
 */
class MdProgress extends MdElement {
    /**
     * Defines the properties of the MdProgress element.
     * @property {Number} max - The maximum value of the progress.
     * @property {Number} value - The current value of the progress.
     * @property {Boolean} circular - Whether the progress should be displayed in circular mode.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {
            max: { type: Number },
            value: { type: Number },
            circular: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdProgress.
     */
    constructor() {
        super();
        this.max = 100;
    }

    /**
     * Renders the content of the MdProgress element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <progress 
                class="md-progress__native"
                .max="${ifDefined(this.max)}"
                .value="${ifDefined(this.value)}"
            ></progress>
            ${this.circular ? html`
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" />
                </svg>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" />
                </svg>
            ` : ``}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-progress' class to the element's class list.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-progress');
    }

    /**
     * Callback invoked when the element's properties are updated.
     * @param {Map} changedProperties - A map of changed properties.
     * @override
     */
    updated(changedProperties) {
        if (changedProperties.has('circular')) {
            if (this.circular) {
                this.classList.add('md-progress--circular');
            } else {
                this.classList.remove('md-progress--circular');
            }
        }

        if (this.value) {
            this.style.setProperty('--md-progress-value', this.value);
            this.classList.remove('md-progress--indeterminate');
        } else {
            this.style.setProperty('--md-progress-value', 0);
            this.classList.add('md-progress--indeterminate');
        }
    }
}

/**
 * Define the custom element 'md-progress' using the MdProgress class.
 * @type {MdProgress}
 */
customElements.define('md-progress', MdProgress);

export { MdProgress };
