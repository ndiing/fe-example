/**
 * Represents a module with initialization and destruction methods.
 */
class Module {
    /**
     * Creates a new instance of the module.
     * @param {HTMLElement} element - The element to associate with the module.
     * @param {Object} options - Options for configuring the module.
     */
    constructor(element, options = {}) {
        /**
         * The HTML element associated with the module.
         * @type {HTMLElement}
         */
        this.element = element;

        /**
         * Options for configuring the module.
         * @type {Object}
         */
        this.options = options;

        // Initialize the module
        this.init();
    }

    /**
     * Initializes the module.
     * This method should be overridden by subclasses to provide module-specific initialization logic.
     */
    init() {
        // Implementation specific to each module
    }

    /**
     * Destroys the module.
     * This method should be overridden by subclasses to provide module-specific cleanup logic.
     */
    destroy() {
        // Implementation specific to each module
    }
}

export { Module };
