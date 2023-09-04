import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

class DemoTooltip extends MdElement{
    render(){
        return html`
            <div class="md-layout-grid">
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-tooltip
                        id="tooltip0">
                        Save to favorites
                    </md-tooltip>
                    <md-button id="button0" label="tooltip" tonal @click="${() => tooltip0.show({handle:button0})}"></md-button>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-tooltip
                        id="tooltip1">
                        Grant value is calculated using the<br>
                        closing stock price from the day<br>
                        before the grant date. Amounts do<br>
                        not reflect tax witholdings.
                    </md-tooltip>
                    <md-button id="button1" label="tooltip" tonal @click="${() => tooltip1.show({handle:button1})}"></md-button>
                </div>
                <div class="md-layout-grid__item--expanded4 md-layout-grid__item--medium4 md-layout-grid__item--compact4">
                    <md-tooltip
                        id="tooltip2"
                        .rich="${true}"
                        .label="${"Rich tooltip"}"
                        .buttons="${[{label:"Action"}]}"
                    >
                        Rich tooltips bring attention to a particular<br>
                        element of feature that warrants the user's<br>
                        focus.
                    </md-tooltip>
                    <md-button id="button2" label="tooltip" tonal @click="${() => tooltip2.show({handle:button2})}"></md-button>
                </div>
            </div>
        `
    }
}

customElements.define('demo-tooltip', DemoTooltip)

export default document.createElement('demo-tooltip')