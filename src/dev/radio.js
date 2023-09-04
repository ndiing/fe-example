import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoRadio extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-radio name="radio"></md-radio>
                    <md-radio name="radio" checked></md-radio>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-radio', DemoRadio)

export default document.createElement('demo-radio')