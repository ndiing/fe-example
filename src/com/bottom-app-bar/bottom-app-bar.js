import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdElement } from '../../lib/element';

/**
 * Represents a custom element for displaying a bottom app bar.
 * @extends MdElement
 * @example
 * // In your HTML file:
 * // <md-bottom-app-bar icons="[ 'home', 'search', 'settings' ]"></md-bottom-app-bar>
 */
class MdBottomAppBar extends MdElement {
  /**
   * An object describing the properties of the MdBottomAppBar element.
   * @typedef {Object} MdBottomAppBarProperties
   * @property {Array<string>} icons - An array of icons to display in the bottom app bar.
   * @property {Object} fab - The configuration for the floating action button (FAB) within the bottom app bar.
   */

  /**
   * Defines the properties and their types for the MdBottomAppBar element.
   * @returns {MdBottomAppBarProperties} The properties of the element.
   */
  static get properties() {
    return {
      icons: { type: Array },
      fab: { type: Object },
    };
  }

  /**
   * Creates an instance of MdBottomAppBar.
   * @example
   * // Create an instance of MdBottomAppBar in JavaScript:
   * // const bottomAppBar = new MdBottomAppBar();
   */
  constructor() {
    super();
  }

  /**
   * Renders the icons in the bottom app bar.
   * @returns {TemplateResult} The rendered icons template.
   */
  renderIcons() {
    if (!this.icons?.length) {
      return html``;
    }

    return html`
      <div class="md-bottom-app-bar__icons">
        ${this.icons.map(
          (icon) => html`
            <md-icon class="md-bottom-app-bar__icon" .interactive="${true}"
              >${icon}</md-icon
            >
          `
        )}
      </div>
    `;
  }

  /**
   * Renders the floating action button (FAB) in the bottom app bar.
   * @returns {TemplateResult} The rendered FAB template.
   */
  renderFab() {
    if (!this.fab) {
      return html``;
    }

    return html`
      <div class="md-bottom-app-bar__spacer"></div>
      <md-fab
        class="md-bottom-app-bar__fab"
        .icon="${ifDefined(this.fab?.icon ?? this.fab)}"
        .label="${ifDefined(this.fab?.label)}"
      ></md-fab>
    `;
  }

  /**
   * Callback invoked when the element is connected to the DOM.
   * Adds the 'md-bottom-app-bar' class to the element's class list.
   * @example
   * // Connect the element to the DOM:
   * // document.querySelector('body').appendChild(new MdBottomAppBar());
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('md-bottom-app-bar');
  }

  /**
   * Renders the content of the MdBottomAppBar element using lit-html.
   * @returns {TemplateResult} The rendered HTML template.
   * @example
   * // In your HTML file:
   * // <md-bottom-app-bar
   * //   icons="[ 'home', 'search', 'settings' ]"
   * //   fab="{ icon: 'add', label: 'Add Item' }"
   * // ></md-bottom-app-bar>
   */
  render() {
    return html`
      ${this.renderIcons()}
      ${this.renderFab()}
    `;
  }
}

// Define the custom element 'md-bottom-app-bar' using the MdBottomAppBar class.
customElements.define('md-bottom-app-bar', MdBottomAppBar);

export { MdBottomAppBar };
