import { html } from 'lit';
import { MdElement } from '../../lib/element';

/**
 * Represents a custom badge element.
 * @extends MdElement
 * @example
 * // In your HTML file:
 * // <md-badge label="42"></md-badge>
 */
class MdBadge extends MdElement {
  /**
   * An object describing the properties of the MdBadge element.
   * @typedef {Object} MdBadgeProperties
   * @property {number} label - The label for the badge.
   */

  /**
   * Defines the properties and their types for the MdBadge element.
   * @returns {MdBadgeProperties} The properties of the element.
   */
  static get properties() {
    return {
      label: { type: parseInt },
    };
  }

  /**
   * Constructs a new MdBadge element.
   */
  constructor() {
    super();
  }

  /**
   * Renders the badge content based on the label value.
   *
   * @returns {string} The rendered badge content.
   */
  render() {
    return this.label > 999 ? '999+' : this.label;
  }

  /**
   * Callback invoked when the element is connected to the DOM.
   * Adds the "md-badge" class to the element's class list.
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-badge');
  }
}

// Define the custom element "md-badge".
customElements.define('md-badge', MdBadge);

export { MdBadge };
