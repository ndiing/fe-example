<a name="module_MdListItem"></a>

## MdListItem

* [MdListItem](#module_MdListItem)
    * [~MdListItem](#module_MdListItem..MdListItem) ⇐ <code>MdElement</code>
        * [new MdListItem()](#new_module_MdListItem..MdListItem_new)
        * _instance_
            * [.render()](#module_MdListItem..MdListItem+render) ⇒ <code>TemplateResult</code>
            * [.connectedCallback()](#module_MdListItem..MdListItem+connectedCallback)
            * [.firstUpdated(changedProperties)](#module_MdListItem..MdListItem+firstUpdated)
        * _static_
            * [.properties](#module_MdListItem..MdListItem.properties) ⇒ <code>Object.&lt;string, (ReactiveControllerHost\|PropertyDeclaration)&gt;</code>

<a name="module_MdListItem..MdListItem"></a>

### MdListItem~MdListItem ⇐ <code>MdElement</code>
Represents a custom element for displaying a list-item.Extends the MdElement base class.

**Kind**: inner class of [<code>MdListItem</code>](#module_MdListItem)  
**Extends**: <code>MdElement</code>  

* [~MdListItem](#module_MdListItem..MdListItem) ⇐ <code>MdElement</code>
    * [new MdListItem()](#new_module_MdListItem..MdListItem_new)
    * _instance_
        * [.render()](#module_MdListItem..MdListItem+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#module_MdListItem..MdListItem+connectedCallback)
        * [.firstUpdated(changedProperties)](#module_MdListItem..MdListItem+firstUpdated)
    * _static_
        * [.properties](#module_MdListItem..MdListItem.properties) ⇒ <code>Object.&lt;string, (ReactiveControllerHost\|PropertyDeclaration)&gt;</code>

<a name="new_module_MdListItem..MdListItem_new"></a>

#### new MdListItem()
Creates an instance of MdListItem.

<a name="module_MdListItem..MdListItem+render"></a>

#### mdListItem.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdListItem element using lit-html.

**Kind**: instance method of [<code>MdListItem</code>](#module_MdListItem..MdListItem)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="module_MdListItem..MdListItem+connectedCallback"></a>

#### mdListItem.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-list__item' class to the element's class list.

**Kind**: instance method of [<code>MdListItem</code>](#module_MdListItem..MdListItem)  
<a name="module_MdListItem..MdListItem+firstUpdated"></a>

#### mdListItem.firstUpdated(changedProperties)
Callback invoked when the element's properties are first updated.Initializes the Ripple effect on the element.

**Kind**: instance method of [<code>MdListItem</code>](#module_MdListItem..MdListItem)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;(string\|symbol\|number), any&gt;</code> | Map of changed properties. |

<a name="module_MdListItem..MdListItem.properties"></a>

#### MdListItem.properties ⇒ <code>Object.&lt;string, (ReactiveControllerHost\|PropertyDeclaration)&gt;</code>
Defines the properties of the MdListItem element.

**Kind**: static property of [<code>MdListItem</code>](#module_MdListItem..MdListItem)  
**Returns**: <code>Object.&lt;string, (ReactiveControllerHost\|PropertyDeclaration)&gt;</code> - An object representing the properties of the element.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | The icon for the list-item. |
| label | <code>string</code> | The label text for the list-item. |
| routerLink | <code>string</code> | The router link for the list-item. |
| selected | <code>boolean</code> | Indicates whether the list-item is selected. |

