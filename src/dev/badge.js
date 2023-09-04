import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoBadge extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-badge label=""></md-badge>
                    <md-badge label="1"></md-badge>
                    <md-badge label="1111"></md-badge>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-badge', DemoBadge)

export default document.createElement('demo-badge')