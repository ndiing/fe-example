import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying a list.
 *
 * @extends MdElement
 * @element md-list
 */
class MdList extends MdElement {
    /**
     * Properties for the MdList custom element.
     *
     * @property {boolean} selectable - Whether the items in the list are selectable.
     * @property {boolean} multiSelect - Whether multiple items can be selected simultaneously.
     * @property {Array<Object>} data - An array of data objects representing list items.
     */
    static get properties() {
        return {
            selectable: { type: Boolean },
            multiSelect: { type: Boolean },
            data: { type: Array },
        };
    }

    /**
     * Creates an instance of MdList.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Renders the content of the MdList element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     * @example
     * <!-- Usage example of the md-list element -->
     * <md-list selectable multiSelect .data="${listData}" @onListItemClick="${handleListItemClick}"></md-list>
     */
    render() {
        return html`
            ${this.data?.map(data => html`
                <md-list-row class="md-list__row">
                    <md-list-item
                        .data="${data}"
                        .icon="${ifDefined(data.icon)}"
                        .label="${ifDefined(data.label)}"
                        .routerLink="${ifDefined(data.routerLink)}"
                        .selected="${ifDefined(data.selected)}"
                        @click="${this.handleListItemClick}"
                    ></md-list-item>
                </md-list-row>
            `)}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-list' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-list');
    }

    /**
     * Handles a click on a list item.
     * Updates item selection based on configuration and emits an event.
     * @param {Event} event - The click event.
     * @fires MdList#onListItemClick - Emitted when a list item is clicked.
     */
    handleListItemClick(event) {
        const listItem = event.currentTarget;

        if (this.selectable) {
            if (this.multiSelect) {
                listItem.data.selected = !listItem.data.selected;
            } else {
                for (const data of this.data) {
                    data.selected = data === listItem.data;
                }
            }
            this.requestUpdate();
        }

        /**
         * Emitted when a list item is clicked.
         * @event MdList#onListItemClick
         * @type {Object}
         * @property {Event} event - The original click event.
         * @property {HTMLElement} listItem - The clicked list item element.
         */
        this.emit('onListItemClick', {
            event,
            listItem,
        });
    }
}

/**
 * A custom list element.
 *
 * @element md-list
 * @example
 * <!-- Usage example of the md-list element -->
 * <md-list selectable multiSelect .data="${listData}" @onListItemClick="${handleListItemClick}"></md-list>
 */
customElements.define('md-list', MdList);

export { MdList };
