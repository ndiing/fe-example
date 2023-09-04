<a name="MdFab"></a>

## MdFab ⇐ <code>MdElement</code>
Represents a custom element for displaying a floating action button (FAB).

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Element**: md-fab  

* [MdFab](#MdFab) ⇐ <code>MdElement</code>
    * [new MdFab()](#new_MdFab_new)
    * _instance_
        * [.render()](#MdFab+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdFab+connectedCallback)
        * [.updated(changedProperties)](#MdFab+updated)
        * [.firstUpdated()](#MdFab+firstUpdated)
    * _static_
        * [.properties](#MdFab.properties)

<a name="new_MdFab_new"></a>

### new MdFab()
Creates an instance of MdFab.

<a name="MdFab+render"></a>

### mdFab.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdFab element using lit-html.

**Kind**: instance method of [<code>MdFab</code>](#MdFab)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-fab element --><md-fab icon="add" label="Add" small extended @click="${handleFabClick}"></md-fab>
```
<a name="MdFab+connectedCallback"></a>

### mdFab.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-fab' class to the element's class list.

**Kind**: instance method of [<code>MdFab</code>](#MdFab)  
<a name="MdFab+updated"></a>

### mdFab.updated(changedProperties)
Callback invoked when the element's properties are updated.Adds or removes style classes based on property changes.

**Kind**: instance method of [<code>MdFab</code>](#MdFab)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdFab+firstUpdated"></a>

### mdFab.firstUpdated()
Callback invoked when the element is first updated.Initializes the ripple effect on the FAB element.

**Kind**: instance method of [<code>MdFab</code>](#MdFab)  
<a name="MdFab.properties"></a>

### MdFab.properties
Properties for the MdFab custom element.

**Kind**: static property of [<code>MdFab</code>](#MdFab)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | The icon to be displayed within the FAB. |
| label | <code>string</code> | The label to be displayed within the FAB. |
| small | <code>boolean</code> | Whether the FAB should have a small size. |
| large | <code>boolean</code> | Whether the FAB should have a large size. |
| extended | <code>boolean</code> | Whether the FAB should have extended styling. |

