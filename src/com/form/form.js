import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdElement } from "../../lib/element";

/**
 * Represents a custom element for displaying an form.
 * Extends the MdElement base class.
 */
class MdForm extends MdElement {
    /**
     * Defines the properties of the MdForm element.
     * @returns {Object} An object representing the properties of the element.
     */
    static get properties() {
        return {
            acceptCharset: {type:String},
            action: {type:String},
            // elements: {type:String},
            encoding: {type:String},
            enctype: {type:String},
            // length: {type:String},
            method: {type:String},
            name: {type:String},
            target: {type:String},
        };
    }

    /**
     * Creates an instance of MdForm.
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes)
    }

    /**
     * Renders the content of the MdForm element using lit-html.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
        return html`
            <form 
                class="md-form__native"
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .encoding="${ifDefined(this.encoding)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .target="${ifDefined(this.target)}"
                @formdata="${this.handleFormNativeFormdata}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.body}</form>
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-form' class to the element's class list.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('md-form');
    }

    // reportValidity()
    // requestSubmit()
    // reset()
    // submit()

    get formNative(){
        return this.querySelector('.md-form__native')
    }

    handleFormNativeFormdata(event){
        // console.log(event)

        this.emit('onFormNativeFormdata',{event})
    }
    handleFormNativeReset(event){
        for(const element of this.formNative.elements){
            if(!element.classList.contains('md-text-field__native'))continue
            element.dispatchEvent(new CustomEvent('onTextFieldNativeReset',{
                bubbles:true,
                cancelable:true,
                detail:{}
            }))
        }

        this.emit('onTextFieldNativeReset',{event})
    }
    handleFormNativeSubmit(event){
        event.preventDefault()
        // console.log(event)

        new FormData(this.formNative)

        this.emit('onFormNativeSubmit',{event})
    }
}

// Define the custom element 'md-form' using the MdForm class.
customElements.define('md-form', MdForm);

export { MdForm };
