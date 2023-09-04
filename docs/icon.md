<a name="MdIcon"></a>

## MdIcon ⇐ <code>MdElement</code>
Represents a custom element for displaying an icon.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Element**: md-icon  

* [MdIcon](#MdIcon) ⇐ <code>MdElement</code>
    * [new MdIcon()](#new_MdIcon_new)
    * _instance_
        * [.render()](#MdIcon+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdIcon+connectedCallback)
        * [.firstUpdated()](#MdIcon+firstUpdated)
    * _static_
        * [.properties](#MdIcon.properties)

<a name="new_MdIcon_new"></a>

### new MdIcon()
Creates an instance of MdIcon.

<a name="MdIcon+render"></a>

### mdIcon.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdIcon element using lit-html.

**Kind**: instance method of [<code>MdIcon</code>](#MdIcon)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-icon element --><md-icon class="md-custom-icon">favorite</md-icon>
```
<a name="MdIcon+connectedCallback"></a>

### mdIcon.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-icon' class to the element's class list.

**Kind**: instance method of [<code>MdIcon</code>](#MdIcon)  
<a name="MdIcon+firstUpdated"></a>

### mdIcon.firstUpdated()
Callback invoked when the element is first updated.Initializes the ripple effect on the icon element if it's interactive.

**Kind**: instance method of [<code>MdIcon</code>](#MdIcon)  
<a name="MdIcon.properties"></a>

### MdIcon.properties
Properties for the MdIcon custom element.

**Kind**: static property of [<code>MdIcon</code>](#MdIcon)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| interactive | <code>boolean</code> | Whether the icon should have interactive (clickable) behavior. |

