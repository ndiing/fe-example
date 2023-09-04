<a name="MdTabBar"></a>

## MdTabBar ⇐ <code>MdElement</code>
Represents a custom element for displaying a tab bar.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdTabBar#event:onTabClick</code>  
**Element**: md-tab-bar  

* [MdTabBar](#MdTabBar) ⇐ <code>MdElement</code>
    * [new MdTabBar()](#new_MdTabBar_new)
    * _instance_
        * [.render()](#MdTabBar+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdTabBar+connectedCallback)
        * [.handleTabClick(event)](#MdTabBar+handleTabClick)
        * [.handleTabSelected(event)](#MdTabBar+handleTabSelected)
    * _static_
        * [.properties](#MdTabBar.properties) ⇒ <code>Object</code>

<a name="new_MdTabBar_new"></a>

### new MdTabBar()
Creates an instance of MdTabBar.

<a name="MdTabBar+render"></a>

### mdTabBar.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdTabBar element using lit-html.

**Kind**: instance method of [<code>MdTabBar</code>](#MdTabBar)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdTabBar+connectedCallback"></a>

### mdTabBar.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-tab-bar' class to the element's class list.

**Kind**: instance method of [<code>MdTabBar</code>](#MdTabBar)  
<a name="MdTabBar+handleTabClick"></a>

### mdTabBar.handleTabClick(event)
Handles the click event when a tab is clicked.

**Kind**: instance method of [<code>MdTabBar</code>](#MdTabBar)  
**Emits**: <code>MdTabBar#event:onTabClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdTabBar+handleTabSelected"></a>

### mdTabBar.handleTabSelected(event)
Handles the "onTabSelected" event from a tab element.Sets the CSS variables for tab indicator width and position.

**Kind**: instance method of [<code>MdTabBar</code>](#MdTabBar)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>CustomEvent</code> | The "onTabSelected" event. |

<a name="MdTabBar.properties"></a>

### MdTabBar.properties ⇒ <code>Object</code>
Defines the properties of the MdTabBar element.

**Kind**: static property of [<code>MdTabBar</code>](#MdTabBar)  
**Returns**: <code>Object</code> - An object representing the properties of the element.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | An array of data objects representing each tab. |

