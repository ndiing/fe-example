<a name="MdSwitch"></a>

## MdSwitch
Represents a custom element for displaying a switch.Extends the MdElement base class.

**Kind**: global class  

* [MdSwitch](#MdSwitch)
    * [new MdSwitch()](#new_MdSwitch_new)
    * _instance_
        * [.switchNative](#MdSwitch+switchNative) ⇒ <code>HTMLInputElement</code>
        * [.switchThumb](#MdSwitch+switchThumb) ⇒ <code>HTMLInputElement</code>
        * [.render()](#MdSwitch+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdSwitch+connectedCallback)
        * [.handleSwitchNativeInput(event)](#MdSwitch+handleSwitchNativeInput)
    * _static_
        * [.properties](#MdSwitch.properties) ⇒ <code>Object</code>

<a name="new_MdSwitch_new"></a>

### new MdSwitch()
Creates an instance of MdSwitch.

<a name="MdSwitch+switchNative"></a>

### mdSwitch.switchNative ⇒ <code>HTMLInputElement</code>
Returns the native switch element.

**Kind**: instance property of [<code>MdSwitch</code>](#MdSwitch)  
**Returns**: <code>HTMLInputElement</code> - The native switch element.  
<a name="MdSwitch+switchThumb"></a>

### mdSwitch.switchThumb ⇒ <code>HTMLInputElement</code>
Returns the thumb switch element.

**Kind**: instance property of [<code>MdSwitch</code>](#MdSwitch)  
**Returns**: <code>HTMLInputElement</code> - The thumb switch element.  
<a name="MdSwitch+render"></a>

### mdSwitch.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdSwitch element using lit-html.

**Kind**: instance method of [<code>MdSwitch</code>](#MdSwitch)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdSwitch+connectedCallback"></a>

### mdSwitch.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-switch' class to the element's class list.

**Kind**: instance method of [<code>MdSwitch</code>](#MdSwitch)  
<a name="MdSwitch+handleSwitchNativeInput"></a>

### mdSwitch.handleSwitchNativeInput(event)
Handles the input event on the native switch element.Updates the indeterminate and checked properties and emits an event.

**Kind**: instance method of [<code>MdSwitch</code>](#MdSwitch)  
**Emit**: onSwitchNativeInput - Emitted when the native switch is interacted with.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MdSwitch.properties"></a>

### MdSwitch.properties ⇒ <code>Object</code>
Defines the properties of the MdSwitch element.

**Kind**: static property of [<code>MdSwitch</code>](#MdSwitch)  
**Returns**: <code>Object</code> - An object representing the properties of the element.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name attribute of the switch. |
| indeterminate | <code>boolean</code> | Whether the switch is in the indeterminate state. |
| checked | <code>boolean</code> | Whether the switch is checked. |

