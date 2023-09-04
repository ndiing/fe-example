import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoButton extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-button elevated label="Label"></md-button>
                    <md-button filled label="Label"></md-button>
                    <md-button tonal label="Label"></md-button>
                    <md-button outlined label="Label"></md-button>
                    <md-button label="Label"></md-button>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-button elevated label="Label" icon="image"></md-button>
                    <md-button filled label="Label" icon="image"></md-button>
                    <md-button tonal label="Label" icon="image"></md-button>
                    <md-button outlined label="Label" icon="image"></md-button>
                    <md-button label="Label" icon="image"></md-button>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `
    }
}

customElements.define('demo-button', DemoButton)

export default document.createElement('demo-button')