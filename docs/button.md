<a name="MdButton"></a>

## MdButton ⇐ <code>MdElement</code>
Represents a custom button element.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdButton#event:click - Fired when the button is clicked.</code>  
**Element**: md-button  

* [MdButton](#MdButton) ⇐ <code>MdElement</code>
    * [new MdButton()](#new_MdButton_new)
    * _instance_
        * [.buttonNative](#MdButton+buttonNative) ⇒ <code>HTMLButtonElement</code> \| <code>null</code>
        * [.render()](#MdButton+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdButton+connectedCallback)
        * [.updated(changedProperties)](#MdButton+updated)
        * [.firstUpdated()](#MdButton+firstUpdated)
    * _static_
        * [.properties](#MdButton.properties)

<a name="new_MdButton_new"></a>

### new MdButton()
Creates an instance of MdButton.

**Example**  
```js
// Create a new button elementconst button = new MdButton();button.label = "Click me";button.elevated = true;button.addEventListener('click', () => {    console.log('Button clicked');});
```
<a name="MdButton+buttonNative"></a>

### mdButton.buttonNative ⇒ <code>HTMLButtonElement</code> \| <code>null</code>
Retrieves the native button element within the custom button.

**Kind**: instance property of [<code>MdButton</code>](#MdButton)  
**Returns**: <code>HTMLButtonElement</code> \| <code>null</code> - The native button element or null if not found.  
<a name="MdButton+render"></a>

### mdButton.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdButton element using lit-html.

**Kind**: instance method of [<code>MdButton</code>](#MdButton)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdButton+connectedCallback"></a>

### mdButton.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-button' class to the element's class list.

**Kind**: instance method of [<code>MdButton</code>](#MdButton)  
<a name="MdButton+updated"></a>

### mdButton.updated(changedProperties)
Callback invoked when the element's properties are updated.Adds or removes style classes based on property changes.

**Kind**: instance method of [<code>MdButton</code>](#MdButton)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdButton+firstUpdated"></a>

### mdButton.firstUpdated()
Callback invoked when the element is first updated.Initializes the Ripple effect for the button.

**Kind**: instance method of [<code>MdButton</code>](#MdButton)  
<a name="MdButton.properties"></a>

### MdButton.properties
Properties for the MdButton custom element.

**Kind**: static property of [<code>MdButton</code>](#MdButton)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | The icon to be displayed within the button. |
| label | <code>string</code> | The label to be displayed within the button. |
| elevated | <code>boolean</code> | Whether the button should have elevated styling. |
| filled | <code>boolean</code> | Whether the button should have filled styling. |
| tonal | <code>boolean</code> | Whether the button should have tonal styling. |
| outlined | <code>boolean</code> | Whether the button should have outlined styling. |
| type | <code>string</code> | The type attribute for the underlying native button element. |
| selected | <code>boolean</code> | Whether the button is selected or not. |

