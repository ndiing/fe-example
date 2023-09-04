import { html } from "lit";
import { MdElement } from "../../lib/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Represents a custom element for displaying a slider.
 * Extends the MdElement base class.
 * @extends MdElement
 * @element md-slider
 * @fires MdSlider#onSliderNativeInput
 */
class MdSlider extends MdElement {
    /**
     * Defines the properties of the MdSlider element.
     * @returns {Object} An object representing the properties of the element.
     * @property {string} name - The name of the slider element.
     * @property {number} min - The minimum value of the slider.
     * @property {number} max - The maximum value of the slider.
     * @property {number} value - The current value of the slider.
     */
    static get properties() {
        return {
            name: { type: String },
            min: { type: Number },
            max: { type: Number },
            value: { type: Number },
        };
    }

    /**
     * Creates an instance of MdSlider.
     * @constructor
     */
    constructor() {
        super();
        this.min = 0;
        this.max = 100;
        this.value = 0;
    }

    /**
     * Renders the content of the MdSlider element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <input 
                class="md-slider__native"
                type="range"
                .name="${ifDefined(this.name)}"
                .min="${ifDefined(this.min)}"
                .max="${ifDefined(this.max)}"
                .value="${ifDefined(this.value)}"
                @input="${this.handleSliderNativeInput}"
            >
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-slider' class to the element's class list.
     * @inheritdoc
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-slider');
    }

    /**
     * Callback invoked when the element's properties are updated.
     * Updates the value of the slider thumb's position.
     * @param {Map} changedProperties - A map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has('value')) {
            const value = ((this.value - this.min) * 100) / (this.max - this.min);
            this.style.setProperty('--md-slider-value', value + '%');
        }
    }

    /**
     * Handles the input event from the native slider element.
     * Updates the value property and emits the 'onSliderNativeInput' event.
     * @fires MdSlider#onSliderNativeInput
     * @param {Event} event - The input event.
     */
    handleSliderNativeInput(event) {
        const sliderNative = event.currentTarget;

        this.value = sliderNative.value;

        this.emit('onSliderNativeInput', {
            event
        });
    }
}

/**
 * A custom element for displaying a slider.
 * @element md-slider
 * @fires MdSlider#onSliderNativeInput
 * @example
 * // Example usage in HTML:
 * <md-slider name="volume" min="0" max="100" value="50" @onSliderNativeInput="${handleSliderInput}"></md-slider>
 * <script>
 *   function handleSliderInput(event) {
 *       console.log("Slider value:", event.target.value);
 *   }
 * </script>
 */
customElements.define('md-slider', MdSlider);

export { MdSlider };
