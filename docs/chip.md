<a name="MdChip"></a>

## MdChip ⇐ <code>MdElement</code>
Represents a custom element for displaying a chip.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Element**: md-chip  

* [MdChip](#MdChip) ⇐ <code>MdElement</code>
    * [new MdChip()](#new_MdChip_new)
    * _instance_
        * [.render()](#MdChip+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdChip+connectedCallback)
        * [.firstUpdated()](#MdChip+firstUpdated)
    * _static_
        * [.properties](#MdChip.properties)

<a name="new_MdChip_new"></a>

### new MdChip()
Creates an instance of MdChip.

<a name="MdChip+render"></a>

### mdChip.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdChip element using lit-html.

**Kind**: instance method of [<code>MdChip</code>](#MdChip)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-chip element --><md-chip icon="favorite" label="Favorite"></md-chip>
```
<a name="MdChip+connectedCallback"></a>

### mdChip.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-chip' class to the element's class list.

**Kind**: instance method of [<code>MdChip</code>](#MdChip)  
<a name="MdChip+firstUpdated"></a>

### mdChip.firstUpdated()
Callback invoked when the element is first updated.Initializes the Ripple effect for the chip.

**Kind**: instance method of [<code>MdChip</code>](#MdChip)  
<a name="MdChip.properties"></a>

### MdChip.properties
Properties for the MdChip custom element.

**Kind**: static property of [<code>MdChip</code>](#MdChip)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | The icon to be displayed within the chip. |
| label | <code>string</code> | The label to be displayed within the chip. |
| selected | <code>boolean</code> | Whether the chip is selected. |

