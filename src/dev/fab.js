import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoFab extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-fab icon="image"></md-fab>
                    <md-fab icon="image" small></md-fab>
                    <md-fab icon="image" large></md-fab>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-fab icon="image" extended></md-fab>
                    <md-fab icon="image" label="Label" extended></md-fab>
                    <md-fab label="Label" extended></md-fab>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-fab', DemoFab)

export default document.createElement('demo-fab')