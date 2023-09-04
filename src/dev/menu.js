import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoMenu extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <!-- menu start -->
                <div class="md-layout-grid__item--expanded6 md-layout-grid__item--medium4 md-layout-grid__item--compact4" >
                    <md-menu
                        id="menu1"
                        .selectable="${true}"
                        .data="${[
                            {label:"Label 1",selected:true},
                            {label:"Label 2"},
                            {label:"Label 3"},
                            {label:"Label 4"},
                        ]}"
                    ></md-menu>
                    <md-button id="button1" label="menu1" tonal @click="${() => menu1.show({handle:button1})}"></md-button>
                </div>
                <div class="md-layout-grid__item--expanded6 md-layout-grid__item--medium4 md-layout-grid__item--compact4" >
                    <md-menu
                        id="menu2"
                        .selectable="${true}"
                        .data="${[
                            {icon:'image',label:"Label 1",selected:true},
                            {icon:'image',label:"Label 2"},
                            {icon:'image',label:"Label 3"},
                            {icon:'image',label:"Label 4"},
                        ]}"
                    ></md-menu>
                    <md-button id="button2" label="menu2" tonal @click="${() => menu2.show({handle:button2})}"></md-button>
                </div>
                <!-- menu end -->
            </div>
        `
    }
}

customElements.define('demo-menu', DemoMenu)

export default document.createElement('demo-menu')