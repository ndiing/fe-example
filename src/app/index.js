import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

const data = [
    //
    { icon: "image", label: "reseller", routerLink: "/reseller" },
];

class AppMain extends MdElement {
    render() {
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-drawer .data="${data}" style="min-height:100vh;max-height:100vh;overflow:auto;width:360px;" class="md-layout-border__item md-layout-border__item--west"></md-navigation-drawer>
                <div style="min-height:100vh;max-height:100vh;overflow:auto;" class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `;
    }
}

customElements.define("app-main", AppMain);

export default document.createElement("app-main");
