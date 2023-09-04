import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoBottomAppBar extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item--south">
                    <md-bottom-app-bar
                        .icons="${[
                            "image",
                            "image",
                            "image",
                            "image",
                        ]}"
                        .fab="${"image"}"
                    ></md-bottom-app-bar>
                </div>
                <div class="md-layout-border__item--center"></div>
            </div>
        `
    }
}

customElements.define('demo-bottom-app-bar', DemoBottomAppBar)

export default document.createElement('demo-bottom-app-bar')