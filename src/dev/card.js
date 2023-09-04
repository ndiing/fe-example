import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoCard extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-card elevated>elevated</md-card>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-card filled>filled</md-card>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-card outlined>outlined</md-card>
                </div>
            </div>
        `
    }
}

customElements.define('demo-card', DemoCard)

export default document.createElement('demo-card')