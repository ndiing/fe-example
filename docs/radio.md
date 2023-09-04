<a name="MdRadio"></a>

## MdRadio ⇐ <code>MdElement</code>
Represents a custom element for displaying a radio button.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Element**: md-radio  

* [MdRadio](#MdRadio) ⇐ <code>MdElement</code>
    * [new MdRadio()](#new_MdRadio_new)
    * _instance_
        * [.radioNative](#MdRadio+radioNative) ⇒ <code>HTMLInputElement</code>
        * [.radioIcon](#MdRadio+radioIcon) ⇒ <code>HTMLInputElement</code>
        * [.render()](#MdRadio+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdRadio+connectedCallback)
        * [.handleRadioNativeInput(event)](#MdRadio+handleRadioNativeInput)
        * [.firstUpdated()](#MdRadio+firstUpdated)
        * ["onRadioNativeInput"](#MdRadio+event_onRadioNativeInput)
    * _static_
        * [.properties](#MdRadio.properties) ⇒ <code>RadioProperties</code>

<a name="new_MdRadio_new"></a>

### new MdRadio()
Creates an instance of MdRadio.

<a name="MdRadio+radioNative"></a>

### mdRadio.radioNative ⇒ <code>HTMLInputElement</code>
Returns the native radio element.

**Kind**: instance property of [<code>MdRadio</code>](#MdRadio)  
**Returns**: <code>HTMLInputElement</code> - The native radio element.  
<a name="MdRadio+radioIcon"></a>

### mdRadio.radioIcon ⇒ <code>HTMLInputElement</code>
Returns the icon radio element.

**Kind**: instance property of [<code>MdRadio</code>](#MdRadio)  
**Returns**: <code>HTMLInputElement</code> - The icon radio element.  
<a name="MdRadio+render"></a>

### mdRadio.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdRadio element using lit-html.

**Kind**: instance method of [<code>MdRadio</code>](#MdRadio)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-radio element --><md-radio name="radioGroup" .checked="${isChecked}" @onRadioNativeInput="${handleRadioInput}"></md-radio>
```
<a name="MdRadio+connectedCallback"></a>

### mdRadio.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-radio' class to the element's class list.

**Kind**: instance method of [<code>MdRadio</code>](#MdRadio)  
<a name="MdRadio+handleRadioNativeInput"></a>

### mdRadio.handleRadioNativeInput(event)
Handles the input event on the native radio element.Updates the indeterminate and checked properties and emits an event.

**Kind**: instance method of [<code>MdRadio</code>](#MdRadio)  
**Emits**: <code>MdRadio#event:onRadioNativeInput - Emitted when the native radio is interacted with.</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MdRadio+firstUpdated"></a>

### mdRadio.firstUpdated()
Initializes the Ripple effect on the radio icon.

**Kind**: instance method of [<code>MdRadio</code>](#MdRadio)  
<a name="MdRadio+event_onRadioNativeInput"></a>

### "onRadioNativeInput"
Emitted when the native radio is interacted with.

**Kind**: event emitted by [<code>MdRadio</code>](#MdRadio)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The original input event. |

<a name="MdRadio.properties"></a>

### MdRadio.properties ⇒ <code>RadioProperties</code>
Defines the properties of the MdRadio element.

**Kind**: static property of [<code>MdRadio</code>](#MdRadio)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name attribute of the radio button. |
| indeterminate | <code>boolean</code> | Whether the radio button is in the indeterminate state. |
| checked | <code>boolean</code> | Whether the radio button is checked. |

