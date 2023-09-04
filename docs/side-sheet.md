<a name="MdSideSheet"></a>

## MdSideSheet ⇐ <code>MdElement</code>
Custom element representing a side-sheet with various content and actions.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdSideSheet#event:onSideSheetIconClick - Fired when an icon in the side-sheet header is clicked.</code>, <code>MdSideSheet#event:onSideSheetButtonClick - Fired when a button in the side-sheet footer is clicked.</code>, <code>MdSideSheet#event:onSideSheetScrimClick - Fired when the scrim overlay of the side-sheet is clicked.</code>  
**Element**: md-side-sheet  

* [MdSideSheet](#MdSideSheet) ⇐ <code>MdElement</code>
    * [new MdSideSheet()](#new_MdSideSheet_new)
    * _instance_
        * [.body](#MdSideSheet+body) : <code>Array.&lt;Node&gt;</code>
        * [.render()](#MdSideSheet+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdSideSheet+connectedCallback)
        * [.updated(changedProperties)](#MdSideSheet+updated)
        * [.handleSideSheetIconClick(event)](#MdSideSheet+handleSideSheetIconClick)
        * [.handleSideSheetButtonClick(event)](#MdSideSheet+handleSideSheetButtonClick)
        * [.show()](#MdSideSheet+show)
        * [.close()](#MdSideSheet+close)
        * [.toggle()](#MdSideSheet+toggle)
        * [.handleSideSheetScrimClick(event)](#MdSideSheet+handleSideSheetScrimClick)
    * _static_
        * [.properties](#MdSideSheet.properties) : <code>Object</code>

<a name="new_MdSideSheet_new"></a>

### new MdSideSheet()
Constructs a new MdSideSheet instance.

<a name="MdSideSheet+body"></a>

### mdSideSheet.body : <code>Array.&lt;Node&gt;</code>
An array of content elements extracted from child nodes.

**Kind**: instance property of [<code>MdSideSheet</code>](#MdSideSheet)  
<a name="MdSideSheet+render"></a>

### mdSideSheet.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdSideSheet custom element using lit-html.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdSideSheet+connectedCallback"></a>

### mdSideSheet.connectedCallback()
Invoked when the element is added to the DOM.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  
<a name="MdSideSheet+updated"></a>

### mdSideSheet.updated(changedProperties)
Invoked when the element's properties are updated.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;(String\|Number\|Symbol), any&gt;</code> | A map of changed properties. |

<a name="MdSideSheet+handleSideSheetIconClick"></a>

### mdSideSheet.handleSideSheetIconClick(event)
Handles the click event on a side-sheet icon.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdSideSheet+handleSideSheetButtonClick"></a>

### mdSideSheet.handleSideSheetButtonClick(event)
Handles the click event on a side-sheet button.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdSideSheet+show"></a>

### mdSideSheet.show()
Shows the side-sheet.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  
<a name="MdSideSheet+close"></a>

### mdSideSheet.close()
Closes the side-sheet.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  
<a name="MdSideSheet+toggle"></a>

### mdSideSheet.toggle()
Toggles the visibility of the side-sheet.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  
<a name="MdSideSheet+handleSideSheetScrimClick"></a>

### mdSideSheet.handleSideSheetScrimClick(event)
Handles the click event on the side-sheet scrim.

**Kind**: instance method of [<code>MdSideSheet</code>](#MdSideSheet)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdSideSheet.properties"></a>

### MdSideSheet.properties : <code>Object</code>
Properties for the MdSideSheet custom element.

**Kind**: static property of [<code>MdSideSheet</code>](#MdSideSheet)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| modal | <code>Boolean</code> | Determines whether the side-sheet should be displayed in full-screen mode. |
| open | <code>Boolean</code> | Determines whether the side-sheet is open. |
| leadingIcons | <code>Array.&lt;String&gt;</code> | An array of leading icons to be displayed in the side-sheet header. |
| label | <code>String</code> | The label for the side-sheet. |
| trailingIcons | <code>Array.&lt;String&gt;</code> | An array of trailing icons to be displayed in the side-sheet header. |
| buttons | <code>Array.&lt;SideSheetButton&gt;</code> | An array of buttons to be displayed in the side-sheet footer. |
| body | <code>Array.&lt;Node&gt;</code> | An array of content elements to be displayed in the side-sheet body. |

