<a name="MdProgress"></a>

## MdProgress ⇐ <code>MdElement</code>
Represents a custom element for displaying progress.

**Kind**: global class  
**Extends**: <code>MdElement</code>  

* [MdProgress](#MdProgress) ⇐ <code>MdElement</code>
    * [new MdProgress()](#new_MdProgress_new)
    * _instance_
        * [.render()](#MdProgress+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdProgress+connectedCallback)
        * [.updated(changedProperties)](#MdProgress+updated)
    * _static_
        * [.properties](#MdProgress.properties) ⇒ <code>Object</code>

<a name="new_MdProgress_new"></a>

### new MdProgress()
Creates an instance of MdProgress.

<a name="MdProgress+render"></a>

### mdProgress.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdProgress element using lit-html.

**Kind**: instance method of [<code>MdProgress</code>](#MdProgress)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdProgress+connectedCallback"></a>

### mdProgress.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-progress' class to the element's class list.

**Kind**: instance method of [<code>MdProgress</code>](#MdProgress)  
<a name="MdProgress+updated"></a>

### mdProgress.updated(changedProperties)
Callback invoked when the element's properties are updated.

**Kind**: instance method of [<code>MdProgress</code>](#MdProgress)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdProgress.properties"></a>

### MdProgress.properties ⇒ <code>Object</code>
Defines the properties of the MdProgress element.

**Kind**: static property of [<code>MdProgress</code>](#MdProgress)  
**Returns**: <code>Object</code> - An object representing the properties of the element.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| max | <code>Number</code> | The maximum value of the progress. |
| value | <code>Number</code> | The current value of the progress. |
| circular | <code>Boolean</code> | Whether the progress should be displayed in circular mode. |

