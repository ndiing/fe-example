<a name="MdList"></a>

## MdList ⇐ <code>MdElement</code>
Represents a custom element for displaying a list.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Element**: md-list  

* [MdList](#MdList) ⇐ <code>MdElement</code>
    * [new MdList()](#new_MdList_new)
    * _instance_
        * [.render()](#MdList+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdList+connectedCallback)
        * [.handleListItemClick(event)](#MdList+handleListItemClick)
        * ["onListItemClick"](#MdList+event_onListItemClick)
    * _static_
        * [.properties](#MdList.properties)

<a name="new_MdList_new"></a>

### new MdList()
Creates an instance of MdList.

<a name="MdList+render"></a>

### mdList.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdList element using lit-html.

**Kind**: instance method of [<code>MdList</code>](#MdList)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-list element --><md-list selectable multiSelect .data="${listData}" @onListItemClick="${handleListItemClick}"></md-list>
```
<a name="MdList+connectedCallback"></a>

### mdList.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-list' class to the element's class list.

**Kind**: instance method of [<code>MdList</code>](#MdList)  
<a name="MdList+handleListItemClick"></a>

### mdList.handleListItemClick(event)
Handles a click on a list item.Updates item selection based on configuration and emits an event.

**Kind**: instance method of [<code>MdList</code>](#MdList)  
**Emits**: <code>MdList#event:onListItemClick - Emitted when a list item is clicked.</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdList+event_onListItemClick"></a>

### "onListItemClick"
Emitted when a list item is clicked.

**Kind**: event emitted by [<code>MdList</code>](#MdList)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The original click event. |
| listItem | <code>HTMLElement</code> | The clicked list item element. |

<a name="MdList.properties"></a>

### MdList.properties
Properties for the MdList custom element.

**Kind**: static property of [<code>MdList</code>](#MdList)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| selectable | <code>boolean</code> | Whether the items in the list are selectable. |
| multiSelect | <code>boolean</code> | Whether multiple items can be selected simultaneously. |
| data | <code>Array.&lt;Object&gt;</code> | An array of data objects representing list items. |

