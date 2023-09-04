<a name="MdElement"></a>

## MdElement
Represents a custom element based on LitElement with additional functionality.

**Kind**: global class  

* [MdElement](#MdElement)
    * [.createRenderRoot()](#MdElement+createRenderRoot) ⇒ <code>this</code>
    * [.emit(type, detail)](#MdElement+emit)

<a name="MdElement+createRenderRoot"></a>

### mdElement.createRenderRoot() ⇒ <code>this</code>
Overrides the default render root to use the element itself as the render target.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  
**Returns**: <code>this</code> - - The instance of the element.  
<a name="MdElement+emit"></a>

### mdElement.emit(type, detail)
Emits a custom event from the element.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event. |
| detail | <code>Object</code> | Additional details for the event. |

