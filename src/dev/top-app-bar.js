import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoTopAppBar extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-border-fit">
                <div class="md-layout-border__item--north">
                    <md-top-app-bar
                        .leadingIcons="${[
                            "image",
                        ]}"
                        .label="${"Label"}"
                        .trailingIcons="${[
                            "image",
                        ]}"
                    ></md-top-app-bar>
                </div>
                <div class="md-layout-border__item--center"></div>
            </div>
        `
    }
}

customElements.define('demo-top-app-bar', DemoTopAppBar)

export default document.createElement('demo-top-app-bar')