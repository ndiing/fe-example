import { LitElement, html } from "lit";
import { MdElement } from "../lib/element";

const data=[{icon:'image',label:"badge",routerLink:"/badge"},
{icon:'image',label:"bottom-app-bar",routerLink:"/bottom-app-bar"},
{icon:'image',label:"bottom-sheet",routerLink:"/bottom-sheet"},
{icon:'image',label:"button",routerLink:"/button"},
{icon:'image',label:"card",routerLink:"/card"},
// {icon:'image',label:"carousel",routerLink:"/carousel"},
{icon:'image',label:"checkbox",routerLink:"/checkbox"},
{icon:'image',label:"chip",routerLink:"/chip"},
// {icon:'image',label:"date-picker",routerLink:"/date-picker"},
{icon:'image',label:"dialog",routerLink:"/dialog"},
{icon:'image',label:"divider",routerLink:"/divider"},
{icon:'image',label:"fab",routerLink:"/fab"},
{icon:'image',label:"icon",routerLink:"/icon"},
{icon:'image',label:"list",routerLink:"/list"},
{icon:'image',label:"menu",routerLink:"/menu"},
{icon:'image',label:"navigation-bar",routerLink:"/navigation-bar"},
{icon:'image',label:"navigation-drawer",routerLink:"/navigation-drawer"},
{icon:'image',label:"navigation-rail",routerLink:"/navigation-rail"},
{icon:'image',label:"progress",routerLink:"/progress"},
{icon:'image',label:"radio",routerLink:"/radio"},
{icon:'image',label:"search",routerLink:"/search"},
{icon:'image',label:"segmented",routerLink:"/segmented"},
{icon:'image',label:"side-sheet",routerLink:"/side-sheet"},
{icon:'image',label:"slider",routerLink:"/slider"},
{icon:'image',label:"snackbar",routerLink:"/snackbar"},
{icon:'image',label:"switch",routerLink:"/switch"},
{icon:'image',label:"tab",routerLink:"/tab"},
{icon:'image',label:"text-field",routerLink:"/text-field"},
// {icon:'image',label:"time-picker",routerLink:"/time-picker"},
{icon:'image',label:"tooltip",routerLink:"/tooltip"},
{icon:'image',label:"top-app-bar",routerLink:"/top-app-bar"},]

class DemoMain extends MdElement{
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-drawer
                    .data="${data}"
                    style="min-height:100vh;max-height:100vh;overflow:auto;width:360px;" class="md-layout-border__item md-layout-border__item--west"
                ></md-navigation-drawer>
                <div style="min-height:100vh;max-height:100vh;overflow:auto;" class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `
    }
}

customElements.define('demo-main', DemoMain)

export default document.createElement('demo-main')