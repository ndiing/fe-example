<a name="MdTab"></a>

## MdTab ⇐ <code>MdElement</code>
Represents a custom element for displaying a tab.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdTab#event:onTabSelected</code>  
**Element**: md-tab  

* [MdTab](#MdTab) ⇐ <code>MdElement</code>
    * [new MdTab()](#new_MdTab_new)
    * _instance_
        * [.tabIcon](#MdTab+tabIcon) ⇒ <code>HTMLElement</code>
        * [.tabLabel](#MdTab+tabLabel) ⇒ <code>HTMLElement</code>
        * [.render()](#MdTab+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdTab+connectedCallback)
        * [.updated(changedProperties)](#MdTab+updated)
    * _static_
        * [.properties](#MdTab.properties) ⇒ <code>Object</code>

<a name="new_MdTab_new"></a>

### new MdTab()
Creates an instance of MdTab.

<a name="MdTab+tabIcon"></a>

### mdTab.tabIcon ⇒ <code>HTMLElement</code>
Returns the tab's icon element.

**Kind**: instance property of [<code>MdTab</code>](#MdTab)  
**Returns**: <code>HTMLElement</code> - The tab's icon element.  
<a name="MdTab+tabLabel"></a>

### mdTab.tabLabel ⇒ <code>HTMLElement</code>
Returns the tab's label element.

**Kind**: instance property of [<code>MdTab</code>](#MdTab)  
**Returns**: <code>HTMLElement</code> - The tab's label element.  
<a name="MdTab+render"></a>

### mdTab.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdTab element using lit-html.

**Kind**: instance method of [<code>MdTab</code>](#MdTab)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdTab+connectedCallback"></a>

### mdTab.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-tab' class to the element's class list.

**Kind**: instance method of [<code>MdTab</code>](#MdTab)  
<a name="MdTab+updated"></a>

### mdTab.updated(changedProperties)
Callback invoked when the element's properties are updated.Emits the 'onTabSelected' event when the 'selected' property changes.

**Kind**: instance method of [<code>MdTab</code>](#MdTab)  
**Emits**: <code>MdTab#event:onTabSelected</code>  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdTab.properties"></a>

### MdTab.properties ⇒ <code>Object</code>
Defines the properties of the MdTab element.

**Kind**: static property of [<code>MdTab</code>](#MdTab)  
**Returns**: <code>Object</code> - An object representing the properties of the element.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | The icon to be displayed within the tab. |
| label | <code>string</code> | The label to be displayed within the tab. |
| selected | <code>boolean</code> | Whether the tab is selected. |

