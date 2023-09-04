import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

const data={
    date: '',
    datetimeLocal: '',
    email: '',
    month: '',
    number: '',
    password: '',
    search: '',
    tel: '',
    text: '',
    time: '',
    url: '',
    week: '',
}

class DemoTextField extends MdElement{
    render(){
        return html`
            <md-form
                @onFormNativeReset="${console.log}"
                @onFormNativeFormdata="${console.log}"
                @onFormNativeSubmit="${console.log}"
            >
                <div class="md-layout-grid">
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Date" type="date" name="date" required value="${data.date}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Datetime Local" type="datetime-local" name="datetimeLocal" required value="${data.datetimeLocal}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Email" type="email" name="email" required value="${data.email}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Month" type="month" name="month" required value="${data.month}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Number" type="number" name="number" required value="${data.number}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Password" type="password" name="password" required value="${data.password}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Search" type="search" name="search" required value="${data.search}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Tel" type="tel" name="tel" required value="${data.tel}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Text" type="text" name="text" required value="${data.text}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Time" type="time" name="time" required value="${data.time}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="URL" type="url" name="url" required value="${data.url}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field label="Week" type="week" name="week" required value="${data.week}"></md-text-field></div>

                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" .value="${"Value"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" .leadingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" .leadingIcons="${['image']}" .trailingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" .label="${"Label"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" .label="${"Label"}" .value="${"value"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" .label="${"Label"}" .leadingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" .label="${"Label"}" .leadingIcons="${['image']}" .trailingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>

                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled .value="${"Value"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled .leadingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled .leadingIcons="${['image']}" .trailingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled .label="${"Label"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled .label="${"Label"}" .value="${"value"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled .label="${"Label"}" .leadingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" filled .label="${"Label"}" .leadingIcons="${['image']}" .trailingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>

                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined .value="${"Value"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined .leadingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined .leadingIcons="${['image']}" .trailingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined .label="${"Label"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined .label="${"Label"}" .value="${"value"}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined .label="${"Label"}" .leadingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-text-field required .placeholder="${"Placeholder"}" outlined .label="${"Label"}" .leadingIcons="${['image']}" .trailingIcons="${['image']}"></md-text-field></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>

                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"></div>
                    <div class="md-layout-grid__item--expanded2 md-layout-grid__item--medium4 md-layout-grid__item--compact4"><md-button type="submit" label="submit" filled></md-button><md-button type="reset" label="reset" outlined></md-button></div>
                </div>
            </md-form>
        `
    }
}

customElements.define('demo-text-field', DemoTextField)

export default document.createElement('demo-text-field')