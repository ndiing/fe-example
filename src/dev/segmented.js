import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoSegmented extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-segmented
                        .data="${[
                            {label:"Label 1",selected:true},
                            {label:"Label 2"},
                            {label:"Label 3"},
                            {label:"Label 4"},
                        ]}"
                    ></md-segmented>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-segmented
                        .multiSelect="${true}"
                        .data="${[
                            {label:"Label 1",selected:true},
                            {label:"Label 2",selected:true},
                            {label:"Label 3"},
                            {label:"Label 4"},
                        ]}"
                    ></md-segmented>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-segmented', DemoSegmented)

export default document.createElement('demo-segmented')