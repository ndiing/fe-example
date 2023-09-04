import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoCheckbox extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-checkbox></md-checkbox>
                    <md-checkbox indeterminate></md-checkbox>
                    <md-checkbox checked></md-checkbox>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-checkbox', DemoCheckbox)

export default document.createElement('demo-checkbox')