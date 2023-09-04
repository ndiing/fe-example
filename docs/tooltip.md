<a name="MdTooltip"></a>

## MdTooltip ⇐ <code>MdElement</code>
Represents a custom element for displaying a tooltip.Extends the MdElement base class.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Element**: md-tooltip  

* [MdTooltip](#MdTooltip) ⇐ <code>MdElement</code>
    * [new MdTooltip()](#new_MdTooltip_new)
    * _instance_
        * [.body](#MdTooltip+body) : <code>Array.&lt;Node&gt;</code>
        * [.tooltipContainer](#MdTooltip+tooltipContainer) ⇒ <code>HTMLElement</code>
        * [.render()](#MdTooltip+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdTooltip+connectedCallback)
        * [.updated(changedProperties)](#MdTooltip+updated)
        * [.handleTooltipIconClick(event)](#MdTooltip+handleTooltipIconClick)
        * [.handleTooltipButtonClick(event)](#MdTooltip+handleTooltipButtonClick)
        * [.show()](#MdTooltip+show)
        * [.close()](#MdTooltip+close)
        * [.toggle()](#MdTooltip+toggle)
        * [.handleTooltipScrimClick(event)](#MdTooltip+handleTooltipScrimClick)
        * ["onTooltipIconClick"](#MdTooltip+event_onTooltipIconClick)
        * ["onTooltipButtonClick"](#MdTooltip+event_onTooltipButtonClick)
        * ["onTooltipScrimClick"](#MdTooltip+event_onTooltipScrimClick)
    * _static_
        * [.properties](#MdTooltip.properties) ⇒ <code>TooltipProperties</code>

<a name="new_MdTooltip_new"></a>

### new MdTooltip()
Creates an instance of MdTooltip.

<a name="MdTooltip+body"></a>

### mdTooltip.body : <code>Array.&lt;Node&gt;</code>
An array of content elements extracted from child nodes.

**Kind**: instance property of [<code>MdTooltip</code>](#MdTooltip)  
<a name="MdTooltip+tooltipContainer"></a>

### mdTooltip.tooltipContainer ⇒ <code>HTMLElement</code>
Gets the tooltip container element.

**Kind**: instance property of [<code>MdTooltip</code>](#MdTooltip)  
**Returns**: <code>HTMLElement</code> - The tooltip container element.  
<a name="MdTooltip+render"></a>

### mdTooltip.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdTooltip element using lit-html.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-tooltip element --><md-tooltip rich open .leadingIcons="${leadingIcons}" label="Tooltip Title" .trailingIcons="${trailingIcons}" .buttons="${tooltipButtons}" @onTooltipButtonClick="${handleTooltipButtonClick}">  <p>This is the tooltip content.</p></md-tooltip>
```
<a name="MdTooltip+connectedCallback"></a>

### mdTooltip.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-tooltip' class to the element's class list.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
<a name="MdTooltip+updated"></a>

### mdTooltip.updated(changedProperties)
Called when properties are updated.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;(string\|number\|symbol), unknown&gt;</code> | The properties that have changed. |

<a name="MdTooltip+handleTooltipIconClick"></a>

### mdTooltip.handleTooltipIconClick(event)
Handles the click event on a tooltip icon.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
**Emits**: [<code>onTooltipIconClick</code>](#MdTooltip+event_onTooltipIconClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdTooltip+handleTooltipButtonClick"></a>

### mdTooltip.handleTooltipButtonClick(event)
Handles the click event on a tooltip button.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
**Emits**: [<code>onTooltipButtonClick</code>](#MdTooltip+event_onTooltipButtonClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdTooltip+show"></a>

### mdTooltip.show()
Shows the tooltip.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
<a name="MdTooltip+close"></a>

### mdTooltip.close()
Closes the tooltip.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
<a name="MdTooltip+toggle"></a>

### mdTooltip.toggle()
Toggles the visibility of the tooltip.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
<a name="MdTooltip+handleTooltipScrimClick"></a>

### mdTooltip.handleTooltipScrimClick(event)
Handles the click event on the tooltip scrim.

**Kind**: instance method of [<code>MdTooltip</code>](#MdTooltip)  
**Emits**: [<code>onTooltipScrimClick</code>](#MdTooltip+event_onTooltipScrimClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdTooltip+event_onTooltipIconClick"></a>

### "onTooltipIconClick"
Emitted when a tooltip icon is clicked.

**Kind**: event emitted by [<code>MdTooltip</code>](#MdTooltip)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The original click event. |
| icon | <code>HTMLElement</code> | The clicked icon element. |

<a name="MdTooltip+event_onTooltipButtonClick"></a>

### "onTooltipButtonClick"
Emitted when a tooltip button is clicked.

**Kind**: event emitted by [<code>MdTooltip</code>](#MdTooltip)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The original click event. |
| button | <code>HTMLElement</code> | The clicked button element. |

<a name="MdTooltip+event_onTooltipScrimClick"></a>

### "onTooltipScrimClick"
Emitted when the tooltip scrim is clicked.

**Kind**: event emitted by [<code>MdTooltip</code>](#MdTooltip)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The original click event. |

<a name="MdTooltip.properties"></a>

### MdTooltip.properties ⇒ <code>TooltipProperties</code>
Defines the properties of the MdTooltip element.

**Kind**: static property of [<code>MdTooltip</code>](#MdTooltip)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [rich] | <code>boolean</code> | Determines whether the tooltip should be displayed in full-screen mode. |
| [open] | <code>boolean</code> | Determines whether the tooltip is open. |
| [leadingIcons] | <code>Array.&lt;string&gt;</code> | An array of leading icons to be displayed in the tooltip header. |
| [label] | <code>string</code> | The label for the tooltip. |
| [trailingIcons] | <code>Array.&lt;string&gt;</code> | An array of trailing icons to be displayed in the tooltip header. |
| [buttons] | <code>Array.&lt;TooltipButton&gt;</code> | An array of buttons to be displayed in the tooltip footer. |
| [body] | <code>Array.&lt;Node&gt;</code> | An array of content elements to be displayed in the tooltip body. |

