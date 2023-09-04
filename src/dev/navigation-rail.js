import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoNavigationRail extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <!-- navigation-rail start -->
                <div class="md-layout-border__item--west ">
                    <md-navigation-rail
                        id="navigationRail"
                        .selectable="${true}"
                        .data="${[
                            {icon:'image',selected:true},
                            {icon:'image'},
                            {icon:'image'},
                            {icon:'image'},
                        ]}"
                    ></md-navigation-rail>
                </div>
                <div class="md-layout-border__item--center ">
                </div>
                <!-- navigation-rail end -->
            </div>
        `
    }
}

customElements.define('demo-navigation-rail', DemoNavigationRail)

export default document.createElement('demo-navigation-rail')