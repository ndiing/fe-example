<a name="MdDivider"></a>

## MdDivider ⇐ <code>MdElement</code>
Represents a custom element for displaying a divider.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Element**: md-divider  

* [MdDivider](#MdDivider) ⇐ <code>MdElement</code>
    * [new MdDivider()](#new_MdDivider_new)
    * _instance_
        * [.render()](#MdDivider+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdDivider+connectedCallback)
    * _static_
        * [.properties](#MdDivider.properties) ⇒ <code>Object</code>

<a name="new_MdDivider_new"></a>

### new MdDivider()
Creates an instance of MdDivider.

<a name="MdDivider+render"></a>

### mdDivider.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdDivider element using lit-html.

**Kind**: instance method of [<code>MdDivider</code>](#MdDivider)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-divider element --><md-divider></md-divider>
```
<a name="MdDivider+connectedCallback"></a>

### mdDivider.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-divider' class to the element's class list.

**Kind**: instance method of [<code>MdDivider</code>](#MdDivider)  
<a name="MdDivider.properties"></a>

### MdDivider.properties ⇒ <code>Object</code>
Defines the properties of the MdDivider element.

**Kind**: static property of [<code>MdDivider</code>](#MdDivider)  
**Returns**: <code>Object</code> - An empty object since dividers do not have properties.  
