## Classes

<dl>
<dt><a href="#MdBadge">MdBadge</a> ⇐ <code>MdElement</code></dt>
<dd><p>Represents a custom badge element.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MdBadgeProperties">MdBadgeProperties</a> : <code>Object</code></dt>
<dd><p>An object describing the properties of the MdBadge element.</p>
</dd>
</dl>

<a name="MdBadge"></a>

## MdBadge ⇐ <code>MdElement</code>
Represents a custom badge element.

**Kind**: global class  
**Extends**: <code>MdElement</code>  

* [MdBadge](#MdBadge) ⇐ <code>MdElement</code>
    * [new MdBadge()](#new_MdBadge_new)
    * _instance_
        * [.render()](#MdBadge+render) ⇒ <code>string</code>
        * [.connectedCallback()](#MdBadge+connectedCallback)
    * _static_
        * [.properties](#MdBadge.properties) ⇒ [<code>MdBadgeProperties</code>](#MdBadgeProperties)

<a name="new_MdBadge_new"></a>

### new MdBadge()
Constructs a new MdBadge element.

**Example**  
```js
// In your HTML file:// <md-badge label="42"></md-badge>
```
<a name="MdBadge+render"></a>

### mdBadge.render() ⇒ <code>string</code>
Renders the badge content based on the label value.

**Kind**: instance method of [<code>MdBadge</code>](#MdBadge)  
**Returns**: <code>string</code> - The rendered badge content.  
<a name="MdBadge+connectedCallback"></a>

### mdBadge.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the "md-badge" class to the element's class list.

**Kind**: instance method of [<code>MdBadge</code>](#MdBadge)  
<a name="MdBadge.properties"></a>

### MdBadge.properties ⇒ [<code>MdBadgeProperties</code>](#MdBadgeProperties)
Defines the properties and their types for the MdBadge element.

**Kind**: static property of [<code>MdBadge</code>](#MdBadge)  
**Returns**: [<code>MdBadgeProperties</code>](#MdBadgeProperties) - The properties of the element.  
<a name="MdBadgeProperties"></a>

## MdBadgeProperties : <code>Object</code>
An object describing the properties of the MdBadge element.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>number</code> | The label for the badge. |

