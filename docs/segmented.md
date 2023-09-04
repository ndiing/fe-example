<a name="MdSegmented"></a>

## MdSegmented ⇐ <code>MdElement</code>
Represents a custom element for displaying segmented buttons.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdSegmented#event:onButtonClick</code>  
**Element**: md-segmented  

* [MdSegmented](#MdSegmented) ⇐ <code>MdElement</code>
    * [new MdSegmented()](#new_MdSegmented_new)
    * _instance_
        * [.render()](#MdSegmented+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdSegmented+connectedCallback)
        * [.handleButtonClick(event)](#MdSegmented+handleButtonClick)
    * _static_
        * [.properties](#MdSegmented.properties) ⇒ <code>SegmentedProperties</code>

<a name="new_MdSegmented_new"></a>

### new MdSegmented()
Creates an instance of MdSegmented.

<a name="MdSegmented+render"></a>

### mdSegmented.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdSegmented element using lit-html.

**Kind**: instance method of [<code>MdSegmented</code>](#MdSegmented)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdSegmented+connectedCallback"></a>

### mdSegmented.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-segmented' class to the element's class list.

**Kind**: instance method of [<code>MdSegmented</code>](#MdSegmented)  
<a name="MdSegmented+handleButtonClick"></a>

### mdSegmented.handleButtonClick(event)
Handles the click event when a segmented button is clicked.

**Kind**: instance method of [<code>MdSegmented</code>](#MdSegmented)  
**Emits**: <code>MdSegmented#event:onButtonClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdSegmented.properties"></a>

### MdSegmented.properties ⇒ <code>SegmentedProperties</code>
Defines the properties of the MdSegmented element.

**Kind**: static property of [<code>MdSegmented</code>](#MdSegmented)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| multiSelect | <code>boolean</code> | Whether multiple buttons can be selected simultaneously. |
| data | <code>Array.&lt;Object&gt;</code> | An array of data objects representing each segment. |

