import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoList extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <!-- list start -->
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-list
                        .data="${[
                            {label:"Label 1"},
                            {label:"Label 2"},
                            {label:"Label 3"},
                            {label:"Label 4"},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-list
                        .data="${[
                            {icon:'image',label:"Label 1"},
                            {icon:'image',label:"Label 2"},
                            {icon:'image',label:"Label 3"},
                            {icon:'image',label:"Label 4"},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                </div>
                <!-- list end -->
                <!-- list start -->
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-list
                        .selectable="${true}"
                        .data="${[
                            {label:"Label 1",selected:true},
                            {label:"Label 2"},
                            {label:"Label 3"},
                            {label:"Label 4"},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-list
                        .selectable="${true}"
                        .multiSelect="${true}"
                        .data="${[
                            {label:"Label 1",selected:true},
                            {label:"Label 2",selected:true},
                            {label:"Label 3"},
                            {label:"Label 4"},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                </div>
                <!-- list end -->
            </div>
        `
    }
}

customElements.define('demo-list', DemoList)

export default document.createElement('demo-list')