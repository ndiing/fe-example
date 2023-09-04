<a name="MdMenu"></a>

## MdMenu ⇐ <code>MdElement</code>
Represents a custom element for displaying a menu.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdMenu#event:onMenuScrimClick - Fired when the menu scrim is clicked.</code>, <code>MdMenu#event:onMenuItemClick - Fired when a menu item is clicked.</code>  
**Element**: md-menu  

* [MdMenu](#MdMenu) ⇐ <code>MdElement</code>
    * [new MdMenu()](#new_MdMenu_new)
    * _instance_
        * [.menuContainer](#MdMenu+menuContainer) ⇒ <code>HTMLElement</code>
        * [.render()](#MdMenu+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdMenu+connectedCallback)
        * [.updated(changedProperties)](#MdMenu+updated)
        * [.show(options)](#MdMenu+show)
        * [.close()](#MdMenu+close)
        * [.toggle()](#MdMenu+toggle)
        * [.handleMenuScrimClick(event)](#MdMenu+handleMenuScrimClick)
        * [.handleMenuItemClick(event)](#MdMenu+handleMenuItemClick)
        * ["onMenuScrimClick"](#MdMenu+event_onMenuScrimClick)
        * ["onMenuItemClick"](#MdMenu+event_onMenuItemClick)
    * _static_
        * [.properties](#MdMenu.properties) ⇒ <code>Object</code>

<a name="new_MdMenu_new"></a>

### new MdMenu()
Creates an instance of MdMenu.

<a name="MdMenu+menuContainer"></a>

### mdMenu.menuContainer ⇒ <code>HTMLElement</code>
Gets the menu container element.

**Kind**: instance property of [<code>MdMenu</code>](#MdMenu)  
**Returns**: <code>HTMLElement</code> - The menu container element.  
<a name="MdMenu+render"></a>

### mdMenu.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdMenu element using lit-html.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdMenu+connectedCallback"></a>

### mdMenu.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-menu' class to the element's class list.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  
<a name="MdMenu+updated"></a>

### mdMenu.updated(changedProperties)
Called when properties are updated.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;(string\|number\|symbol), unknown&gt;</code> | The properties that have changed. |

<a name="MdMenu+show"></a>

### mdMenu.show(options)
Shows the menu.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for positioning the menu. |

<a name="MdMenu+close"></a>

### mdMenu.close()
Closes the menu.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  
<a name="MdMenu+toggle"></a>

### mdMenu.toggle()
Toggles the visibility of the menu.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  
<a name="MdMenu+handleMenuScrimClick"></a>

### mdMenu.handleMenuScrimClick(event)
Handles the click event on the menu scrim.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  
**Emits**: [<code>onMenuScrimClick</code>](#MdMenu+event_onMenuScrimClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdMenu+handleMenuItemClick"></a>

### mdMenu.handleMenuItemClick(event)
Handles the click event on a menu item.

**Kind**: instance method of [<code>MdMenu</code>](#MdMenu)  
**Emits**: [<code>onMenuItemClick</code>](#MdMenu+event_onMenuItemClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>CustomEvent</code> | The custom event containing the clicked menu item. |

<a name="MdMenu+event_onMenuScrimClick"></a>

### "onMenuScrimClick"
Emitted when the menu scrim is clicked.

**Kind**: event emitted by [<code>MdMenu</code>](#MdMenu)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The original click event. |

<a name="MdMenu+event_onMenuItemClick"></a>

### "onMenuItemClick"
Emitted when a menu item is clicked.

**Kind**: event emitted by [<code>MdMenu</code>](#MdMenu)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>CustomEvent</code> | The original click event. |
| menuItem | <code>HTMLElement</code> | The clicked menu item element. |

<a name="MdMenu.properties"></a>

### MdMenu.properties ⇒ <code>Object</code>
Defines the properties of the MdMenu element.

**Kind**: static property of [<code>MdMenu</code>](#MdMenu)  
**Returns**: <code>Object</code> - An object representing the properties of the element.  
