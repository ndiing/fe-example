import { LitElement } from "lit";

/**
 * Represents a custom element based on LitElement with additional functionality.
 */
class MdElement extends LitElement {
    /**
     * Overrides the default render root to use the element itself as the render target.
     * @returns {this} - The instance of the element.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Emits a custom event from the element.
     * @param {string} type - The type of the custom event.
     * @param {Object} detail - Additional details for the event.
     */
    emit(type, detail = {}) {
        this.dispatchEvent(
            new CustomEvent(type, {
                bubbles: true,
                cancelable: true,
                detail,
            })
        );
    }
}

export { MdElement };
