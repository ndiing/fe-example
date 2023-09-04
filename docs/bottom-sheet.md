<a name="MdBottomSheet"></a>

## MdBottomSheet ⇐ <code>MdElement</code>
Custom element representing a bottom sheet with various content and actions.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdBottomSheet#event:onBottomSheetIconClick - Fired when an icon in the bottom sheet header is clicked.</code>, <code>MdBottomSheet#event:onBottomSheetButtonClick - Fired when a button in the bottom sheet footer is clicked.</code>, <code>MdBottomSheet#event:onBottomSheetScrimClick - Fired when the scrim overlay of the bottom sheet is clicked.</code>  

* [MdBottomSheet](#MdBottomSheet) ⇐ <code>MdElement</code>
    * [new MdBottomSheet()](#new_MdBottomSheet_new)
    * _instance_
        * [.render()](#MdBottomSheet+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdBottomSheet+connectedCallback)
        * [.updated(changedProperties)](#MdBottomSheet+updated)
        * [.handleBottomSheetIconClick(event)](#MdBottomSheet+handleBottomSheetIconClick)
        * [.handleBottomSheetButtonClick(event)](#MdBottomSheet+handleBottomSheetButtonClick)
        * [.show()](#MdBottomSheet+show)
        * [.close()](#MdBottomSheet+close)
        * [.toggle()](#MdBottomSheet+toggle)
        * [.handleBottomSheetScrimClick(event)](#MdBottomSheet+handleBottomSheetScrimClick)
    * _static_
        * [.properties](#MdBottomSheet.properties)

<a name="new_MdBottomSheet_new"></a>

### new MdBottomSheet()
Constructs a new MdBottomSheet instance.

<a name="MdBottomSheet+render"></a>

### mdBottomSheet.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdBottomSheet custom element.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MdBottomSheet+connectedCallback"></a>

### mdBottomSheet.connectedCallback()
Invoked when the element is added to the DOM.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  
<a name="MdBottomSheet+updated"></a>

### mdBottomSheet.updated(changedProperties)
Invoked when the element's properties are updated.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;(String\|Number\|Symbol), any&gt;</code> | A map of changed properties. |

<a name="MdBottomSheet+handleBottomSheetIconClick"></a>

### mdBottomSheet.handleBottomSheetIconClick(event)
Handles the click event on a bottom sheet icon.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdBottomSheet+handleBottomSheetButtonClick"></a>

### mdBottomSheet.handleBottomSheetButtonClick(event)
Handles the click event on a bottom sheet button.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdBottomSheet+show"></a>

### mdBottomSheet.show()
Shows the bottom sheet.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  
<a name="MdBottomSheet+close"></a>

### mdBottomSheet.close()
Closes the bottom sheet.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  
<a name="MdBottomSheet+toggle"></a>

### mdBottomSheet.toggle()
Toggles the visibility of the bottom sheet.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  
<a name="MdBottomSheet+handleBottomSheetScrimClick"></a>

### mdBottomSheet.handleBottomSheetScrimClick(event)
Handles the click event on the bottom sheet scrim overlay.

**Kind**: instance method of [<code>MdBottomSheet</code>](#MdBottomSheet)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdBottomSheet.properties"></a>

### MdBottomSheet.properties
Properties for the MdBottomSheet custom element.

**Kind**: static property of [<code>MdBottomSheet</code>](#MdBottomSheet)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| open | <code>Boolean</code> | Determines whether the bottom sheet is open or closed. |
| leadingIcons | <code>Array</code> | An array of icons to be displayed in the leading section of the header. |
| label | <code>String</code> | The label displayed in the header. |
| trailingIcons | <code>Array</code> | An array of icons to be displayed in the trailing section of the header. |
| buttons | <code>Array</code> | An array of button configurations to be displayed in the footer. |
| body | <code>Array</code> | An array of HTML elements to be displayed in the body of the bottom sheet. |

