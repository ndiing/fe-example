import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoNavigationBar extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <!-- navigation-bar start -->
                <!-- <div class="md-layout-border__item--south ">
                    <md-navigation-bar
                        .selectable="${true}"
                        .data="${[
                            {icon:'image',selected:true},
                            {icon:'image'},
                            {icon:'image'},
                            {icon:'image'},
                        ]}"
                    ></md-navigation-bar>
                </div> -->
                <div class="md-layout-border__item--south ">
                    <md-navigation-bar
                        .selectable="${true}"
                        .data="${[
                            {icon:'image',label:"Label 1",selected:true},
                            {icon:'image',label:"Label 2"},
                            {icon:'image',label:"Label 3"},
                            {icon:'image',label:"Label 4"},
                        ]}"
                    ></md-navigation-bar>
                </div>
                <div class="md-layout-border__item--center ">
                    
                </div>
                <!-- navigation-bar end -->
            </div>
        `
    }
}

customElements.define('demo-navigation-bar', DemoNavigationBar)

export default document.createElement('demo-navigation-bar')