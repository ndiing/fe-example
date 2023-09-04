import { Module } from "./module";

/**
 * Represents a simple router for managing client-side routing and navigation.
 */
class Router extends Module {
    /**
     * Adds routes to the router.
     * @param {Array} routes - An array of route objects.
     * @param {Object} parent - Parent route object.
     * @returns {Array} - An array of added route objects.
     * @example
     * const routes = [
     *   { path: '/', component: HomeComponent },
     *   { path: '/about', component: AboutComponent },
     *   // ... other route definitions
     * ];
     * Router.add(routes);
     */
    static add(routes = [], parent) {
        return routes.reduce((p, c) => {
            c.parent = parent;
            c.path = (c.parent?.path ?? "") + c.path;
            let regexp = new RegExp(
                "^" +
                    c.path
                        .replace(/\:(\w+)/g, "(?<$1>[^/]+)")
                        .replace(/\*/, ".*")
                        .replace(/\/?$/, "/?") +
                    "$",
                "i"
            );
            c.regexp = regexp;
            p = p.concat(c);
            if (c.children && c.children.length) {
                p = p.concat(this.add(c.children, c));
            }
            return p;
        }, []);
    }

    /**
     * Retrieves the route hierarchy for a given route.
     * @param {Object} route - The route object.
     * @returns {Array} - An array containing the route hierarchy.
     * @example
     * const route = Router.get(specificRoute);
     * const routeHierarchy = Router.get(route);
     */
    static get(route) {
        return [route].reduce((p, c) => {
            if (c.parent) {
                p = p.concat(this.get(c.parent));
            }
            p = p.concat(c);
            return p;
        }, []);
    }

    /**
     * Handles a navigation request.
     * @param {Event} event - The event triggering the navigation request.
     * @returns {Promise<void>} - A promise that resolves once navigation is complete.
     * @example
     * const navigationEvent = new Event('click');
     * Router.request(navigationEvent);
     */
    static async request(event) {
        this.emit("onNavigationStart");
        if (this.pending && this.controller) {
            this.controller.abort();
        }
        this.controller = new AbortController();
        this.pending = true;
        this.path = window.location.pathname;
        this.searchParams = new URLSearchParams(window.location.search);
        const query = {};
        for (const [name, value] of this.searchParams) {
            if (query[name]) {
                if (Array.isArray(query[name])) query[name].push(value);
                else query[name] = [query[name], value];
            } else query[name] = value;
        }
        this.query = query;
        this.route = this.routes.find((route) => route.regexp.test(this.path));
        const params = this.path.match(this.route?.regexp)?.groups;
        this.params = params ?? {};
        this.routes_ = this.get(this.route);
        for (const route of this.routes_) {
            try {
                await new Promise(async (resolve, reject) => {
                    this.controller.signal.addEventListener("abort", (event) => {
                        reject(event);
                    });
                    const beforeLoad = route.beforeLoad || (() => true);
                    const next = await beforeLoad();
                    if (next) resolve();
                    else this.controller.abort();
                });
            } catch (error) {
                break;
            }

            if (!route.component) {
                route.component = await route.load();
            }

            if (!route.container) {
                route.container = route.parent?.component ?? document.body;
            }

            if (!route.placeholder) {
                const target = route.container;
                route.placeholder = await new Promise((resolve) => {
                    let observer;
                    const callback = () => {
                        const placeholder = target.querySelector("md-outlet");
                        if (placeholder) {
                            if (observer) observer.disconnect();
                            resolve(placeholder);
                        }
                    };
                    callback();
                    observer = new MutationObserver(callback);
                    observer.observe(target, { childList: true, subtree: true });
                });
            }

            if (!route.component.isConnected) {
                route.placeholder.parentElement.insertBefore(route.component, route.placeholder.nextElementSibling);
            }

            const placeholders = Array.from(document.body.querySelectorAll("md-outlet"));
            for (const placeholder of placeholders) {
                let nextElement = placeholder.nextElementSibling;
                while (nextElement) {
                    if (!this.routes_.find((route) => route.component === nextElement) && !placeholders.find((placeholder) => placeholder === nextElement)) {
                        nextElement.remove();
                    }
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
        this.pending = false;
        this.emit("onNavigationEnd");
    }

    /**
     * Handles a navigation event.
     * @param {Event} event - The navigation event.
     * @example
     * const navigationEvent = new Event('click');
     * Router.handle(navigationEvent);
     */
    static handle(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (!routerLink) return;
        const path = routerLink.getAttribute("routerLink");
        window.history.pushState({}, null, path);
    }

    /**
     * Emits a custom event.
     * @param {string} type - The type of the custom event.
     * @param {Object} detail - Additional details for the event.
     * @example
     * Router.emit("customEvent", { data: "someData" });
     */
    static emit(type, detail = {}) {
        detail = Object.assign(
            {
                path: this.path,
                query: this.query,
                route: this.route,
                params: this.params,
            },
            detail
        );
        window.dispatchEvent(
            new CustomEvent(type, {
                bubbles: true,
                cancelable: true,
                detail,
            })
        );
    }

    /**
     * Initializes the router with the provided routes.
     * @param {Array} routes - An array of route objects.
     * @example
     * const routes = [
     *   { path: '/', component: HomeComponent },
     *   { path: '/about', component: AboutComponent },
     *   // ... other route definitions
     * ];
     * Router.init(routes);
     */
    static init(routes = []) {
        this.routes = this.add(routes);

        const pushState = window.history.pushState.bind(window.history);
        window.history.pushState = (...args) => {
            pushState(...args);
            this.emit("popstate");
        };

        this.request = this.request.bind(this);
        this.handle = this.handle.bind(this);

        window.addEventListener("popstate", this.request);
        window.addEventListener("DOMContentLoaded", this.request);
        window.addEventListener("click", this.handle);
    }
}

export { Router };
