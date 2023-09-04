import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoChipGroup extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-chip-group></md-chip-group>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-chip-group', DemoChipGroup)

export default document.createElement('demo-chip-group')