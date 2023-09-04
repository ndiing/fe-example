import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoTab extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-tab-bar
                        .data="${[
                            {label:'Label 1',selected:true},
                            {label:'Label 2'},
                            {label:'Label 3'},
                            {label:'Label 4'},
                        ]}"
                    ></md-tab-bar>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-tab-bar
                        .data="${[
                            {icon:'image',label:'Label 1',selected:true},
                            {icon:'image',label:'Label 2'},
                            {icon:'image',label:'Label 3'},
                            {icon:'image',label:'Label 4'},
                        ]}"
                    ></md-tab-bar>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-tab', DemoTab)

export default document.createElement('demo-tab')