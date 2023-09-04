import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying a chip group.
 *
 * @fires MdChipGroup#onChipClick - Fired when a chip within the group is clicked.
 *
 * @extends MdElement
 * @element md-chip-group
 */
class MdChipGroup extends MdElement {
    /**
     * Properties for the MdChipGroup custom element.
     *
     * @property {Array<Object>} data - An array of data objects representing chips.
     * @property {boolean} selectable - Whether the chips are selectable.
     * @property {boolean} multiSelect - Whether multiple chips can be selected simultaneously.
     *
     */
    static get properties() {
        return {
            data: { type: Array },
            selectable: { type: Boolean },
            multiSelect: { type: Boolean },
        };
    }

    /**
     * Creates an instance of MdChipGroup.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdChipGroup element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-chip-group element -->
     * <md-chip-group .data="${chipData}" selectable multiSelect @onChipClick="${handleChipClick}"></md-chip-group>
     */
    render() {
        return html`
            ${this.data?.map(data => html`
                <md-chip
                    .data="${data}"
                    .icon="${ifDefined(data.icon)}"
                    .label="${ifDefined(data.label)}"
                    .selected="${ifDefined(data.selected)}"
                    @click="${this.handleChipClick}"
                ></md-chip>
            `)}    
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-chip-group' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-chip-group');
    }

    /**
     * Handles a click on a chip element.
     * Updates chip selection based on configuration and emits an event.
     * @param {Event} event - The click event.
     * @emit onChipClick - Emitted when a chip within the group is clicked.
     */
    handleChipClick(event) {
        const chip = event.currentTarget;

        if (this.selectable) {
            if (this.multiSelect) {
                chip.data.selected = !chip.data.selected;
            } else {
                for (const data of this.data) {
                    data.selected = data === chip.data;
                }
            }
            this.requestUpdate();
        }

        this.emit('onChipClick', {
            event,
            chip
        });
    }
}

/**
 * A custom chip group element.
 *
 * @element md-chip-group
 * @fires MdChipGroup#onChipClick - Fired when a chip within the group is clicked.
 * @example
 * <!-- Usage example of the md-chip-group element -->
 * <md-chip-group .data="${chipData}" selectable multiSelect @onChipClick="${handleChipClick}"></md-chip-group>
 */
customElements.define('md-chip-group', MdChipGroup);

export { MdChipGroup };
