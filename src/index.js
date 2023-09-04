import "./com/index.scss";
import "./com/index.js";
import { Router } from "./lib/router";

// example
import mainComponent from "./app/index.js";
// import errorComponent from "./dev/error.js";
const components = [
    { path: "reseller", load: () => import("./app/reseller.js").then((m) => m.default) },
    // { path: "example", load: () => import("./dev/example.js").then((m) => m.default) },
    // { path: "form", load: () => import("./dev/form.js").then((m) => m.default) },
    // { path: "tab-bar", load: () => import("./dev/tab-bar.js").then((m) => m.default) },
    // { path: "list-item", load: () => import("./dev/list-item.js").then((m) => m.default) },
    // { path: "chip-group", load: () => import("./dev/chip-group.js").then((m) => m.default) },
    // { path: "button", load: () => import("./dev/button.js").then((m) => m.default) },
    // { path: "top-app-bar", load: () => import("./dev/top-app-bar.js").then((m) => m.default) },
    // { path: "tooltip", load: () => import("./dev/tooltip.js").then((m) => m.default) },
    // { path: "time-picker", load: () => import("./dev/time-picker.js").then((m) => m.default) },
    // { path: "text-field", load: () => import("./dev/text-field.js").then((m) => m.default) },
    // { path: "tab", load: () => import("./dev/tab.js").then((m) => m.default) },
    // { path: "switch", load: () => import("./dev/switch.js").then((m) => m.default) },
    // { path: "snackbar", load: () => import("./dev/snackbar.js").then((m) => m.default) },
    // { path: "slider", load: () => import("./dev/slider.js").then((m) => m.default) },
    // { path: "side-sheet", load: () => import("./dev/side-sheet.js").then((m) => m.default) },
    // { path: "segmented", load: () => import("./dev/segmented.js").then((m) => m.default) },
    // { path: "search", load: () => import("./dev/search.js").then((m) => m.default) },
    // { path: "radio", load: () => import("./dev/radio.js").then((m) => m.default) },
    // { path: "progress", load: () => import("./dev/progress.js").then((m) => m.default) },
    // { path: "navigation-rail", load: () => import("./dev/navigation-rail.js").then((m) => m.default) },
    // { path: "navigation-drawer", load: () => import("./dev/navigation-drawer.js").then((m) => m.default) },
    // { path: "navigation-bar", load: () => import("./dev/navigation-bar.js").then((m) => m.default) },
    // { path: "menu", load: () => import("./dev/menu.js").then((m) => m.default) },
    // { path: "list", load: () => import("./dev/list.js").then((m) => m.default) },
    // { path: "icon", load: () => import("./dev/icon.js").then((m) => m.default) },
    // { path: "fab", load: () => import("./dev/fab.js").then((m) => m.default) },
    // { path: "divider", load: () => import("./dev/divider.js").then((m) => m.default) },
    // { path: "dialog", load: () => import("./dev/dialog.js").then((m) => m.default) },
    // { path: "date-picker", load: () => import("./dev/date-picker.js").then((m) => m.default) },
    // { path: "chip", load: () => import("./dev/chip.js").then((m) => m.default) },
    // { path: "checkbox", load: () => import("./dev/checkbox.js").then((m) => m.default) },
    // { path: "carousel", load: () => import("./dev/carousel.js").then((m) => m.default) },
    // { path: "card", load: () => import("./dev/card.js").then((m) => m.default) },
    // { path: "bottom-sheet", load: () => import("./dev/bottom-sheet.js").then((m) => m.default) },
    // { path: "bottom-app-bar", load: () => import("./dev/bottom-app-bar.js").then((m) => m.default) },
    // { path: "badge", load: () => import("./dev/badge.js").then((m) => m.default) },
    // { path: "layout", load: () => import("./dev/layout.js").then((m) => m.default) },
];
Router.init([
    { path: "/", component: mainComponent, children: components },
    // { path: "*", component: errorComponent },
]);
