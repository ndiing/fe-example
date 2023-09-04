import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdElement } from '../../lib/element';

/**
 * Represents a custom element for displaying segmented buttons.
 * Extends the MdElement base class.
 *
 * @extends MdElement
 * @element md-segmented
 * @fires MdSegmented#onButtonClick
 */
class MdSegmented extends MdElement {
    /**
     * Defines the properties of the MdSegmented element.
     *
     * @property {boolean} multiSelect - Whether multiple buttons can be selected simultaneously.
     * @property {Array<Object>} data - An array of data objects representing each segment.
     * @returns {SegmentedProperties}
     */
    static get properties() {
        return {
            multiSelect: { type: Boolean },
            data: { type: Array },
        };
    }

    /**
     * Creates an instance of MdSegmented.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdSegmented element using lit-html.
     *
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            ${this.data?.map(data => html`
                <md-button
                    .data="${data}"
                    .icon="${ifDefined(data.icon)}"
                    .label="${ifDefined(data.label)}"
                    .elevated="${ifDefined(data.elevated)}"
                    .filled="${ifDefined(data.filled)}"
                    .tonal="${ifDefined(data.tonal)}"
                    .outlined="${ifDefined(data.outlined ?? true)}"
                    .type="${ifDefined(data.type)}"
                    .selected="${ifDefined(data.selected)}"
                    @click="${this.handleButtonClick}"
                ></md-button>
            `)}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-segmented' class to the element's class list.
     * @inheritdoc
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-segmented');
    }

    /**
     * Handles the click event when a segmented button is clicked.
     *
     * @fires MdSegmented#onButtonClick
     * @param {Event} event - The click event.
     */
    handleButtonClick(event) {
        const button = event.currentTarget;

        if (this.multiSelect) {
            button.data.selected = !button.data.selected;
        } else {
            for (const data of this.data) {
                data.selected = data === button.data;
            }
        }
        this.requestUpdate();

        this.emit('onButtonClick', {
            event,
            button
        });
    }
}

/**
 * A custom element for displaying segmented buttons.
 * @element md-segmented
 * @fires MdSegmented#onButtonClick
 * @example
 * // Example usage in HTML:
 * <md-segmented multiSelect>
 *   <md-button data="{...}"></md-button>
 *   <md-button data="{...}"></md-button>
 *   <md-button data="{...}"></md-button>
 * </md-segmented>
 */
customElements.define('md-segmented', MdSegmented);

export { MdSegmented };
