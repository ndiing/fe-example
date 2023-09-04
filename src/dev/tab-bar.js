import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoTabBar extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-tab-bar></md-tab-bar>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-tab-bar', DemoTabBar)

export default document.createElement('demo-tab-bar')