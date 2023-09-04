import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoSlider extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-slider min="0" max="100" value="0"></md-slider>
                    <md-slider min="0" max="100" value="50"></md-slider>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-slider', DemoSlider)

export default document.createElement('demo-slider')