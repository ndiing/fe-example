import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoLayout extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item md-layout-border__item--north" style="height:64px;">
                    north
                </div>
                <div class="md-layout-border__item md-layout-border__item--east" style="width:256px;">
                    east
                </div>
                <div class="md-layout-border__item md-layout-border__item--center" style="">
                    center
                </div>
                <div class="md-layout-border__item md-layout-border__item--south" style="height:80px;">
                    south
                </div>
                <div class="md-layout-border__item md-layout-border__item--west" style="width:360px;">
                    west
                </div>
            </div>
        `
    }
}

customElements.define('demo-layout', DemoLayout)

export default document.createElement('demo-layout')