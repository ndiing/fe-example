<a name="MdCard"></a>

## MdCard
Represents a custom element for displaying a card.Extends the MdElement base class.

**Kind**: global class  
**Element**: md-card  

* [MdCard](#MdCard)
    * [new MdCard()](#new_MdCard_new)
    * _instance_
        * [.render()](#MdCard+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdCard+connectedCallback)
        * [.updated(changedProperties)](#MdCard+updated)
    * _static_
        * [.properties](#MdCard.properties)

<a name="new_MdCard_new"></a>

### new MdCard()
Creates an instance of MdCard.

<a name="MdCard+render"></a>

### mdCard.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdCard element using lit-html.

**Kind**: instance method of [<code>MdCard</code>](#MdCard)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdCard+connectedCallback"></a>

### mdCard.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-card' class to the element's class list.

**Kind**: instance method of [<code>MdCard</code>](#MdCard)  
<a name="MdCard+updated"></a>

### mdCard.updated(changedProperties)
Callback invoked when the element's properties are updated.Adds or removes style classes based on property changes.

**Kind**: instance method of [<code>MdCard</code>](#MdCard)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdCard.properties"></a>

### MdCard.properties
Properties for the MdCard custom element.

**Kind**: static property of [<code>MdCard</code>](#MdCard)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| elevated | <code>boolean</code> | Whether the card should have elevated styling. |
| filled | <code>boolean</code> | Whether the card should have filled styling. |
| outlined | <code>boolean</code> | Whether the card should have outlined styling. |

