import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoSideSheet extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item--east ">
                    <md-side-sheet class="md-layout-fit" label="Label" .trailingIcons="${["close"]}" .buttons="${[{label:"Label",filled:true},{label:"Label",outlined:true}]}">body</md-side-sheet>
                </div>
                <div class="md-layout-border__item--east ">
                    <md-side-sheet id="sideSheet2" modal label="Label" .trailingIcons="${["close"]}" .buttons="${[{label:"Label",filled:true},{label:"Label",outlined:true}]}">body</md-side-sheet>
                </div>
                <div class="md-layout-border__item--center ">
                    <md-button label="side sheet" tonal @click="${() => sideSheet2.show()}"></md-button>
                </div>
            </div>
        `
    }
}

customElements.define('demo-side-sheet', DemoSideSheet)

export default document.createElement('demo-side-sheet')