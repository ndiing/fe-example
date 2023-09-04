import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";
import Service from "./service";

// console.log(Service)

class AppReseller extends MdElement {
    static get properties() {
        return {
            data: { type: Object },
        };
    }

    render() {
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <pre>${JSON.stringify(this.data??{},null,4)}</pre>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
            </div>
        `;
    }

    async firstUpdated() {
        // Service.signin({
        //     username: "+6281234567890",
        // }).then(console.log);

        // 436857 Do NOT give the OTP to anyone. Your OTP is 436857. Expires in 5 minutes.
        
        // Service.challenge({
        //     username: "+6281234567890",
        //     password: "436857",
        // }).then(console.log);

        // const data= await Service.reseller({})
        // .then(console.log);
        this.data={message:'OK'}
    }
}

customElements.define("app-reseller", AppReseller);

export default document.createElement("app-reseller");
