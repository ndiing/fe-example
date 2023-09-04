import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoDialog extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-dialog id="dialog" label="Label" .trailingIcons="${["close"]}" .buttons="${[{label:"Label",filled:true},{label:"Label",outlined:true}]}" @onDialogIconClick="${() => dialog.close()}" @onDialogButtonClick="${() => dialog.close()}">
                        Lorem, ipsum dolor.
                        Architecto, eos explicabo!
                        Esse, dolore est.
                    </md-dialog>
                    <md-button label="dialog" tonal @click="${() => dialog.show()}"></md-button>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-dialog id="dialog2" fullScreen .trailingIcons="${["close"]}" @onDialogIconClick="${() => dialog2.close()}"></md-dialog>
                    <md-button label="dialog" tonal @click="${() => dialog2.show()}"></md-button>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-dialog', DemoDialog)

export default document.createElement('demo-dialog')