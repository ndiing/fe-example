import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoError extends MdElement{
    render(){
        return html`
            <h1>Error</h1>
            <md-outlet></md-outlet>
        `
    }
}

customElements.define('demo-error', DemoError)

export default document.createElement('demo-error')