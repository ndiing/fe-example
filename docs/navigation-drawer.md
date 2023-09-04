<a name="MdNavigationDrawer"></a>

## MdNavigationDrawer ⇐ <code>MdElement</code>
Custom element representing a navigation-drawer with various content and actions.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdNavigationDrawer#event:onNavigationDrawerIconClick - Fired when an icon in the navigation-drawer header is clicked.</code>, <code>MdNavigationDrawer#event:onNavigationDrawerButtonClick - Fired when a button in the navigation-drawer footer is clicked.</code>, <code>MdNavigationDrawer#event:onNavigationDrawerScrimClick - Fired when the scrim overlay of the navigation-drawer is clicked.</code>  
**Element**: md-navigation-drawer  

* [MdNavigationDrawer](#MdNavigationDrawer) ⇐ <code>MdElement</code>
    * [new MdNavigationDrawer()](#new_MdNavigationDrawer_new)
    * _instance_
        * [.body](#MdNavigationDrawer+body) : <code>Array.&lt;Node&gt;</code>
        * [.render()](#MdNavigationDrawer+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdNavigationDrawer+connectedCallback)
        * [.updated(changedProperties)](#MdNavigationDrawer+updated)
        * [.handleNavigationDrawerIconClick(event)](#MdNavigationDrawer+handleNavigationDrawerIconClick)
        * [.handleNavigationDrawerButtonClick(event)](#MdNavigationDrawer+handleNavigationDrawerButtonClick)
        * [.show()](#MdNavigationDrawer+show)
        * [.close()](#MdNavigationDrawer+close)
        * [.toggle()](#MdNavigationDrawer+toggle)
        * [.handleNavigationDrawerScrimClick(event)](#MdNavigationDrawer+handleNavigationDrawerScrimClick)
        * [.handleNavigationDrawerItemClick(event)](#MdNavigationDrawer+handleNavigationDrawerItemClick)
    * _static_
        * [.properties](#MdNavigationDrawer.properties) : <code>Object</code>

<a name="new_MdNavigationDrawer_new"></a>

### new MdNavigationDrawer()
Constructs a new MdNavigationDrawer instance.

<a name="MdNavigationDrawer+body"></a>

### mdNavigationDrawer.body : <code>Array.&lt;Node&gt;</code>
An array of content elements extracted from child nodes.

**Kind**: instance property of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
<a name="MdNavigationDrawer+render"></a>

### mdNavigationDrawer.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdNavigationDrawer custom element using lit-html.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdNavigationDrawer+connectedCallback"></a>

### mdNavigationDrawer.connectedCallback()
Invoked when the element is added to the DOM.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
<a name="MdNavigationDrawer+updated"></a>

### mdNavigationDrawer.updated(changedProperties)
Invoked when the element's properties are updated.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;(String\|Number\|Symbol), any&gt;</code> | A map of changed properties. |

<a name="MdNavigationDrawer+handleNavigationDrawerIconClick"></a>

### mdNavigationDrawer.handleNavigationDrawerIconClick(event)
Handles the click event on a navigation-drawer icon.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
**Emits**: <code>MdNavigationDrawer#event:onNavigationDrawerIconClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdNavigationDrawer+handleNavigationDrawerButtonClick"></a>

### mdNavigationDrawer.handleNavigationDrawerButtonClick(event)
Handles the click event on a navigation-drawer button.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
**Emits**: <code>MdNavigationDrawer#event:onNavigationDrawerButtonClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdNavigationDrawer+show"></a>

### mdNavigationDrawer.show()
Shows the navigation-drawer.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
<a name="MdNavigationDrawer+close"></a>

### mdNavigationDrawer.close()
Closes the navigation-drawer.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
<a name="MdNavigationDrawer+toggle"></a>

### mdNavigationDrawer.toggle()
Toggles the visibility of the navigation-drawer.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
<a name="MdNavigationDrawer+handleNavigationDrawerScrimClick"></a>

### mdNavigationDrawer.handleNavigationDrawerScrimClick(event)
Handles the click event on the navigation-drawer scrim.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
**Emits**: <code>MdNavigationDrawer#event:onNavigationDrawerScrimClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdNavigationDrawer+handleNavigationDrawerItemClick"></a>

### mdNavigationDrawer.handleNavigationDrawerItemClick(event)
Handles the click event on the navigation-drawer item.

**Kind**: instance method of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
**Emits**: <code>MdNavigationDrawer#event:handleNavigationDrawerItemClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>CustomEvent</code> | The click event. |

<a name="MdNavigationDrawer.properties"></a>

### MdNavigationDrawer.properties : <code>Object</code>
Properties for the MdNavigationDrawer custom element.

**Kind**: static property of [<code>MdNavigationDrawer</code>](#MdNavigationDrawer)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| modal | <code>Boolean</code> | Determines whether the navigation-drawer should be displayed in full-screen mode. |
| open | <code>Boolean</code> | Determines whether the navigation-drawer is open. |
| leadingIcons | <code>Array.&lt;String&gt;</code> | An array of leading icons to be displayed in the navigation-drawer header. |
| label | <code>String</code> | The label for the navigation-drawer. |
| trailingIcons | <code>Array.&lt;String&gt;</code> | An array of trailing icons to be displayed in the navigation-drawer header. |
| buttons | <code>Array.&lt;NavigationDrawerButton&gt;</code> | An array of buttons to be displayed in the navigation-drawer footer. |
| body | <code>Array.&lt;Node&gt;</code> | An array of content elements to be displayed in the navigation-drawer body. |

