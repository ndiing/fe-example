import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoBottomSheet extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item--south ">
                    <md-bottom-sheet id="bottomSheet" modal label="Label" .trailingIcons="${["close"]}" .buttons="${[{label:"Label",filled:true},{label:"Label",outlined:true}]}">body</md-bottom-sheet>
                </div>
                <div class="md-layout-border__item--center ">
                    <md-button label="bottom sheet" tonal @click="${() => bottomSheet.show()}"></md-button>
                </div>
            </div>
        `
    }
}

customElements.define('demo-bottom-sheet', DemoBottomSheet)

export default document.createElement('demo-bottom-sheet')