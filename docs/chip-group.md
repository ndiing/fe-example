<a name="MdChipGroup"></a>

## MdChipGroup ⇐ <code>MdElement</code>
Represents a custom element for displaying a chip group.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdChipGroup#event:onChipClick - Fired when a chip within the group is clicked.</code>  
**Element**: md-chip-group  

* [MdChipGroup](#MdChipGroup) ⇐ <code>MdElement</code>
    * [new MdChipGroup()](#new_MdChipGroup_new)
    * _instance_
        * [.render()](#MdChipGroup+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdChipGroup+connectedCallback)
        * [.handleChipClick(event)](#MdChipGroup+handleChipClick)
    * _static_
        * [.properties](#MdChipGroup.properties)

<a name="new_MdChipGroup_new"></a>

### new MdChipGroup()
Creates an instance of MdChipGroup.

<a name="MdChipGroup+render"></a>

### mdChipGroup.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdChipGroup element using lit-html.

**Kind**: instance method of [<code>MdChipGroup</code>](#MdChipGroup)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-chip-group element --><md-chip-group .data="${chipData}" selectable multiSelect @onChipClick="${handleChipClick}"></md-chip-group>
```
<a name="MdChipGroup+connectedCallback"></a>

### mdChipGroup.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-chip-group' class to the element's class list.

**Kind**: instance method of [<code>MdChipGroup</code>](#MdChipGroup)  
<a name="MdChipGroup+handleChipClick"></a>

### mdChipGroup.handleChipClick(event)
Handles a click on a chip element.Updates chip selection based on configuration and emits an event.

**Kind**: instance method of [<code>MdChipGroup</code>](#MdChipGroup)  
**Emit**: onChipClick - Emitted when a chip within the group is clicked.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdChipGroup.properties"></a>

### MdChipGroup.properties
Properties for the MdChipGroup custom element.

**Kind**: static property of [<code>MdChipGroup</code>](#MdChipGroup)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Object&gt;</code> | An array of data objects representing chips. |
| selectable | <code>boolean</code> | Whether the chips are selectable. |
| multiSelect | <code>boolean</code> | Whether multiple chips can be selected simultaneously. |

