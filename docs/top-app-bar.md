<a name="MdTopAppBar"></a>

## MdTopAppBar ⇐ <code>MdElement</code>
Represents a custom element for displaying a top app bar.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdTopAppBar#event:onTopAppBarIconClick</code>  
**Element**: md-top-app-bar  

* [MdTopAppBar](#MdTopAppBar) ⇐ <code>MdElement</code>
    * [new MdTopAppBar()](#new_MdTopAppBar_new)
    * _instance_
        * [.render()](#MdTopAppBar+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdTopAppBar+connectedCallback)
        * [.handleTopAppBarIconClick(event)](#MdTopAppBar+handleTopAppBarIconClick)
    * _static_
        * [.properties](#MdTopAppBar.properties) ⇒ <code>Object</code>

<a name="new_MdTopAppBar_new"></a>

### new MdTopAppBar()
Creates an instance of MdTopAppBar.

<a name="MdTopAppBar+render"></a>

### mdTopAppBar.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdTopAppBar element using lit-html.

**Kind**: instance method of [<code>MdTopAppBar</code>](#MdTopAppBar)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdTopAppBar+connectedCallback"></a>

### mdTopAppBar.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-top-app-bar' class to the element's class list.

**Kind**: instance method of [<code>MdTopAppBar</code>](#MdTopAppBar)  
<a name="MdTopAppBar+handleTopAppBarIconClick"></a>

### mdTopAppBar.handleTopAppBarIconClick(event)
Handles the click event when a top app bar icon is clicked.

**Kind**: instance method of [<code>MdTopAppBar</code>](#MdTopAppBar)  
**Emits**: <code>MdTopAppBar#event:onTopAppBarIconClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdTopAppBar.properties"></a>

### MdTopAppBar.properties ⇒ <code>Object</code>
Defines the properties of the MdTopAppBar element.

**Kind**: static property of [<code>MdTopAppBar</code>](#MdTopAppBar)  
**Returns**: <code>Object</code> - An object representing the properties of the element.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| leadingIcons | <code>Array.&lt;string&gt;</code> | An array of leading icons to be displayed in the top app bar. |
| label | <code>string</code> | The label text to be displayed in the top app bar. |
| trailingIcons | <code>Array.&lt;string&gt;</code> | An array of trailing icons to be displayed in the top app bar. |

