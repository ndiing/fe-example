import { Module } from "./module";

/**
 * Represents a Ripple effect module that adds interactive ripples to an element.
 * @extends Module
 */
class Ripple extends Module {
    /**
     * Creates an instance of the Ripple module.
     * @param {HTMLElement} element - The target element to apply the ripple effect to.
     * @param {Object} options - Additional options for configuring the ripple effect.
     * @param {number} options.size - The size of the ripple, as a fraction of the element's size.
     * @param {boolean} options.bounded - Whether the ripple effect should be bounded within the element's boundaries.
     * @param {HTMLElement} options.handle - The element that triggers the ripple effect. Defaults to the target element.
     */
    constructor(element, options = {}) {
        super(
            element,
            Object.assign(
                {
                    size: 141.4213562373095 / 64,
                    bounded: true,
                    handle: null,
                },
                options
            )
        );
    }

    /**
     * Initializes the ripple effect module and sets up event listeners.
     */
    init() {
        this.handle = this.options.handle ?? this.element;

        this.element.classList.add("md-ripple");

        if (this.options.bounded) this.element.classList.add("md-ripple--bounded");

        this.element.style.setProperty("--md-ripple-size", `${this.options.size * 100}%`);
        
        const rect = this.element.getBoundingClientRect();
        let duration = (rect.width/rect.height) * 300
        duration=Math.round(duration/1)*1

        this.element.style.setProperty("--md-ripple-animation-duration", `${duration}ms`);

        this.handle.classList.add("md-ripple--handle");
        this.handle.tabIndex = 0;

        this.mouseenter = this.mouseenter.bind(this);
        this.mouseleave = this.mouseleave.bind(this);
        this.mousedown = this.mousedown.bind(this);
        this.mouseup = this.mouseup.bind(this);
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);

        this.handle.addEventListener("mouseenter", this.mouseenter);
        this.handle.addEventListener("mouseleave", this.mouseleave);
        this.handle.addEventListener("mousedown", this.mousedown);

        this.handle.addEventListener("focus", this.focus);
        this.handle.addEventListener("blur", this.blur);
    }

    /**
     * Handles the mouseenter event to apply hover effect.
     * @param {MouseEvent} event - The mouse event.
     */
    mouseenter(event) {
        this.element.classList.add("md-ripple--hover");
    }

    /**
     * Handles the mouseleave event to remove hover effect.
     * @param {MouseEvent} event - The mouse event.
     */
    mouseleave(event) {
        this.element.classList.remove("md-ripple--hover");
    }

    /**
     * Handles the mousedown event to create and animate the ripple effect.
     * @param {MouseEvent} event - The mouse event.
     */
    mousedown(event) {
        window.addEventListener("mouseup", this.mouseup);

        this.element.style.setProperty("--md-ripple-animation", "none");

        const rect = this.element.getBoundingClientRect();

        const left = (event.clientX - rect.left) / rect.width;
        const top = (event.clientY - rect.top) / rect.height;
        const x = (0.5 - left) * (100 / (this.options.size * 100));
        const y = (0.5 - top) * ((100 / (this.options.size * 100)) * (rect.height / rect.width));

        
        this.element.style.setProperty("--md-ripple-size", `${this.options.size * 100}%`);
        this.element.style.setProperty("--md-ripple-left", `${left * 100}%`);
        this.element.style.setProperty("--md-ripple-top", `${top * 100}%`);
        this.element.style.setProperty("--md-ripple-x", `${x * 100}%`);
        this.element.style.setProperty("--md-ripple-y", `${y * 100}%`);

        this.element.style.removeProperty("--md-ripple-animation");

        this.element.classList.add("md-ripple--pressed");
    }

    /**
     * Handles the mouseup event to remove the pressed state.
     * @param {MouseEvent} event - The mouse event.
     */
    mouseup(event) {
        this.element.classList.remove("md-ripple--pressed");
        window.removeEventListener("mouseup", this.mouseup);
    }

    /**
     * Handles the focus event to apply focus effect.
     * @param {FocusEvent} event - The focus event.
     */
    focus(event) {
        this.element.classList.add("md-ripple--focused");
    }

    /**
     * Handles the blur event to remove focus effect.
     * @param {FocusEvent} event - The blur event.
     */
    blur(event) {
        this.element.classList.remove("md-ripple--focused");
    }
}

export { Ripple };
