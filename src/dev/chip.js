import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoChip extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-chip label="Label"></md-chip>
                    <md-chip label="Label" icon="image"></md-chip>
                    <md-chip label="Label" selected></md-chip>
                    <md-chip label="Label" icon="image" selected></md-chip>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-chip-group
                        .selectable="${true}"
                        .data="${[
                            {label:"Label",selected:true},
                            {label:"Label"},
                            {label:"Label"},
                            {label:"Label"},
                        ]}"
                    ></md-chip-group>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-chip-group
                        .selectable="${true}"
                        .multiSelect="${true}"
                        .data="${[
                            {label:"Label",selected:true},
                            {label:"Label",selected:true},
                            {label:"Label"},
                            {label:"Label"},
                        ]}"
                    ></md-chip-group>
                </div>
            </div>
        `
    }
}

customElements.define('demo-chip', DemoChip)

export default document.createElement('demo-chip')