<a name="MdSlider"></a>

## MdSlider ⇐ <code>MdElement</code>
Represents a custom element for displaying a slider.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdSlider#event:onSliderNativeInput</code>  
**Element**: md-slider  

* [MdSlider](#MdSlider) ⇐ <code>MdElement</code>
    * [new MdSlider()](#new_MdSlider_new)
    * _instance_
        * [.render()](#MdSlider+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdSlider+connectedCallback)
        * [.updated(changedProperties)](#MdSlider+updated)
        * [.handleSliderNativeInput(event)](#MdSlider+handleSliderNativeInput)
    * _static_
        * [.properties](#MdSlider.properties) ⇒ <code>Object</code>

<a name="new_MdSlider_new"></a>

### new MdSlider()
Creates an instance of MdSlider.

<a name="MdSlider+render"></a>

### mdSlider.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdSlider element using lit-html.

**Kind**: instance method of [<code>MdSlider</code>](#MdSlider)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdSlider+connectedCallback"></a>

### mdSlider.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-slider' class to the element's class list.

**Kind**: instance method of [<code>MdSlider</code>](#MdSlider)  
<a name="MdSlider+updated"></a>

### mdSlider.updated(changedProperties)
Callback invoked when the element's properties are updated.Updates the value of the slider thumb's position.

**Kind**: instance method of [<code>MdSlider</code>](#MdSlider)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdSlider+handleSliderNativeInput"></a>

### mdSlider.handleSliderNativeInput(event)
Handles the input event from the native slider element.Updates the value property and emits the 'onSliderNativeInput' event.

**Kind**: instance method of [<code>MdSlider</code>](#MdSlider)  
**Emits**: <code>MdSlider#event:onSliderNativeInput</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MdSlider.properties"></a>

### MdSlider.properties ⇒ <code>Object</code>
Defines the properties of the MdSlider element.

**Kind**: static property of [<code>MdSlider</code>](#MdSlider)  
**Returns**: <code>Object</code> - An object representing the properties of the element.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the slider element. |
| min | <code>number</code> | The minimum value of the slider. |
| max | <code>number</code> | The maximum value of the slider. |
| value | <code>number</code> | The current value of the slider. |

