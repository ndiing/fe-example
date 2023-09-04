<a name="MdCheckbox"></a>

## MdCheckbox ⇐ <code>MdElement</code>
Represents a custom element for displaying a checkbox.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdCheckbox#event:onCheckboxNativeInput - Fired when the native checkbox is interacted with.</code>  
**Element**: md-checkbox  

* [MdCheckbox](#MdCheckbox) ⇐ <code>MdElement</code>
    * [new MdCheckbox()](#new_MdCheckbox_new)
    * _instance_
        * [.checkboxNative](#MdCheckbox+checkboxNative) ⇒ <code>HTMLInputElement</code>
        * [.checkboxIcon](#MdCheckbox+checkboxIcon) ⇒ <code>HTMLInputElement</code>
        * [.render()](#MdCheckbox+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdCheckbox+connectedCallback)
        * [.handleCheckboxNativeInput(event)](#MdCheckbox+handleCheckboxNativeInput)
        * [.firstUpdated()](#MdCheckbox+firstUpdated)
    * _static_
        * [.properties](#MdCheckbox.properties)

<a name="new_MdCheckbox_new"></a>

### new MdCheckbox()
Creates an instance of MdCheckbox.

<a name="MdCheckbox+checkboxNative"></a>

### mdCheckbox.checkboxNative ⇒ <code>HTMLInputElement</code>
Returns the native checkbox element.

**Kind**: instance property of [<code>MdCheckbox</code>](#MdCheckbox)  
**Returns**: <code>HTMLInputElement</code> - The native checkbox element.  
<a name="MdCheckbox+checkboxIcon"></a>

### mdCheckbox.checkboxIcon ⇒ <code>HTMLInputElement</code>
Returns the icon checkbox element.

**Kind**: instance property of [<code>MdCheckbox</code>](#MdCheckbox)  
**Returns**: <code>HTMLInputElement</code> - The icon checkbox element.  
<a name="MdCheckbox+render"></a>

### mdCheckbox.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdCheckbox element using lit-html.

**Kind**: instance method of [<code>MdCheckbox</code>](#MdCheckbox)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-checkbox element --><md-checkbox name="myCheckbox" checked></md-checkbox>
```
<a name="MdCheckbox+connectedCallback"></a>

### mdCheckbox.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-checkbox' class to the element's class list.

**Kind**: instance method of [<code>MdCheckbox</code>](#MdCheckbox)  
<a name="MdCheckbox+handleCheckboxNativeInput"></a>

### mdCheckbox.handleCheckboxNativeInput(event)
Handles the input event on the native checkbox element.Updates the indeterminate and checked properties and emits an event.

**Kind**: instance method of [<code>MdCheckbox</code>](#MdCheckbox)  
**Emit**: onCheckboxNativeInput - Emitted when the native checkbox is interacted with.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MdCheckbox+firstUpdated"></a>

### mdCheckbox.firstUpdated()
Callback invoked when the element is first updated.Initializes the Ripple effect for the checkbox icon.

**Kind**: instance method of [<code>MdCheckbox</code>](#MdCheckbox)  
<a name="MdCheckbox.properties"></a>

### MdCheckbox.properties
Properties for the MdCheckbox custom element.

**Kind**: static property of [<code>MdCheckbox</code>](#MdCheckbox)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name attribute of the checkbox. |
| indeterminate | <code>boolean</code> | Whether the checkbox is in the indeterminate state. |
| checked | <code>boolean</code> | Whether the checkbox is checked. |

