<a name="Router"></a>

## Router
Represents a simple router for managing client-side routing and navigation.

**Kind**: global class  

* [Router](#Router)
    * [.add(routes, parent)](#Router.add) ⇒ <code>Array</code>
    * [.get(route)](#Router.get) ⇒ <code>Array</code>
    * [.request(event)](#Router.request) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.handle(event)](#Router.handle)
    * [.emit(type, detail)](#Router.emit)
    * [.init(routes)](#Router.init)

<a name="Router.add"></a>

### Router.add(routes, parent) ⇒ <code>Array</code>
Adds routes to the router.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Array</code> - - An array of added route objects.  

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>Array</code> | An array of route objects. |
| parent | <code>Object</code> | Parent route object. |

**Example**  
```js
const routes = [  { path: '/', component: HomeComponent },  { path: '/about', component: AboutComponent },  // ... other route definitions];Router.add(routes);
```
<a name="Router.get"></a>

### Router.get(route) ⇒ <code>Array</code>
Retrieves the route hierarchy for a given route.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Array</code> - - An array containing the route hierarchy.  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>Object</code> | The route object. |

**Example**  
```js
const route = Router.get(specificRoute);const routeHierarchy = Router.get(route);
```
<a name="Router.request"></a>

### Router.request(event) ⇒ <code>Promise.&lt;void&gt;</code>
Handles a navigation request.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves once navigation is complete.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The event triggering the navigation request. |

**Example**  
```js
const navigationEvent = new Event('click');Router.request(navigationEvent);
```
<a name="Router.handle"></a>

### Router.handle(event)
Handles a navigation event.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The navigation event. |

**Example**  
```js
const navigationEvent = new Event('click');Router.handle(navigationEvent);
```
<a name="Router.emit"></a>

### Router.emit(type, detail)
Emits a custom event.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event. |
| detail | <code>Object</code> | Additional details for the event. |

**Example**  
```js
Router.emit("customEvent", { data: "someData" });
```
<a name="Router.init"></a>

### Router.init(routes)
Initializes the router with the provided routes.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>Array</code> | An array of route objects. |

**Example**  
```js
const routes = [  { path: '/', component: HomeComponent },  { path: '/about', component: AboutComponent },  // ... other route definitions];Router.init(routes);
```
