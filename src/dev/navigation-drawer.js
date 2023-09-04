import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoNavigationDrawer extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item--west" style="width:360px;">
                    <md-navigation-drawer
                        id="navigationDrawer"
                        .selectable="${true}"
                        .data="${[
                            {label:"Label 1",selected:true},
                            {label:"Label 2"},
                            {label:"Label 3"},
                            {label:"Label 4"},
                        ]}"
                    ></md-navigation-drawer>
                </div>
                <div class="md-layout-border__item--west" style="width:360px;">
                    <md-navigation-drawer
                        id="navigationDrawer2"
                        modal
                        .selectable="${true}"
                        .data="${[
                            {icon:'image',label:"Label 1",selected:true},
                            {icon:'image',label:"Label 2"},
                            {icon:'image',label:"Label 3"},
                            {icon:'image',label:"Label 4"},
                        ]}"
                    ></md-navigation-drawer>
                </div>
                <div class="md-layout-border__item--center">
                    <md-button label="navigation drawer" tonal @click="${() => navigationDrawer2.show()}"></md-button>
                </div>
            </div>
        `
    }
}

customElements.define('demo-navigation-drawer', DemoNavigationDrawer)

export default document.createElement('demo-navigation-drawer')