<a name="MdDialog"></a>

## MdDialog ⇐ <code>MdElement</code>
Represents a custom element for displaying a dialog.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdDialog#event:onDialogIconClick - Fired when a dialog icon is clicked.</code>, <code>MdDialog#event:onDialogButtonClick - Fired when a dialog button is clicked.</code>, <code>MdDialog#event:onDialogScrimClick - Fired when the dialog scrim is clicked.</code>  
**Element**: md-dialog  

* [MdDialog](#MdDialog) ⇐ <code>MdElement</code>
    * [new MdDialog()](#new_MdDialog_new)
    * _instance_
        * [.body](#MdDialog+body) : <code>Array.&lt;Node&gt;</code>
        * [.render()](#MdDialog+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdDialog+connectedCallback)
        * [.updated(changedProperties)](#MdDialog+updated)
        * [.handleDialogIconClick(event)](#MdDialog+handleDialogIconClick)
        * [.handleDialogButtonClick(event)](#MdDialog+handleDialogButtonClick)
        * [.show()](#MdDialog+show)
        * [.close()](#MdDialog+close)
        * [.toggle()](#MdDialog+toggle)
        * [.handleDialogScrimClick(event)](#MdDialog+handleDialogScrimClick)
        * ["onDialogIconClick"](#MdDialog+event_onDialogIconClick)
        * ["onDialogButtonClick"](#MdDialog+event_onDialogButtonClick)
        * ["onDialogScrimClick"](#MdDialog+event_onDialogScrimClick)
    * _static_
        * [.properties](#MdDialog.properties)

<a name="new_MdDialog_new"></a>

### new MdDialog()
Creates an instance of MdDialog.

<a name="MdDialog+body"></a>

### mdDialog.body : <code>Array.&lt;Node&gt;</code>
An array of content elements extracted from child nodes.

**Kind**: instance property of [<code>MdDialog</code>](#MdDialog)  
<a name="MdDialog+render"></a>

### mdDialog.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdDialog element using lit-html.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
**Example**  
```js
<!-- Usage example of the md-dialog element --><md-dialog fullScreen open .leadingIcons="${leadingIcons}" label="Dialog Title" .trailingIcons="${trailingIcons}" .buttons="${dialogButtons}" @onDialogButtonClick="${handleDialogButtonClick}">  <p>This is the dialog content.</p></md-dialog>
```
<a name="MdDialog+connectedCallback"></a>

### mdDialog.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-dialog' class to the element's class list.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
<a name="MdDialog+updated"></a>

### mdDialog.updated(changedProperties)
Called when properties are updated.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;(string\|number\|symbol), unknown&gt;</code> | The properties that have changed. |

<a name="MdDialog+handleDialogIconClick"></a>

### mdDialog.handleDialogIconClick(event)
Handles the click event on a dialog icon.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
**Emits**: [<code>onDialogIconClick</code>](#MdDialog+event_onDialogIconClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdDialog+handleDialogButtonClick"></a>

### mdDialog.handleDialogButtonClick(event)
Handles the click event on a dialog button.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
**Emits**: [<code>onDialogButtonClick</code>](#MdDialog+event_onDialogButtonClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdDialog+show"></a>

### mdDialog.show()
Shows the dialog.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
<a name="MdDialog+close"></a>

### mdDialog.close()
Closes the dialog.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
<a name="MdDialog+toggle"></a>

### mdDialog.toggle()
Toggles the visibility of the dialog.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
<a name="MdDialog+handleDialogScrimClick"></a>

### mdDialog.handleDialogScrimClick(event)
Handles the click event on the dialog scrim.

**Kind**: instance method of [<code>MdDialog</code>](#MdDialog)  
**Emits**: [<code>onDialogScrimClick</code>](#MdDialog+event_onDialogScrimClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdDialog+event_onDialogIconClick"></a>

### "onDialogIconClick"
Emitted when a dialog icon is clicked.

**Kind**: event emitted by [<code>MdDialog</code>](#MdDialog)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The original click event. |
| icon | <code>HTMLElement</code> | The clicked icon element. |

<a name="MdDialog+event_onDialogButtonClick"></a>

### "onDialogButtonClick"
Emitted when a dialog button is clicked.

**Kind**: event emitted by [<code>MdDialog</code>](#MdDialog)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The original click event. |
| button | <code>HTMLElement</code> | The clicked button element. |

<a name="MdDialog+event_onDialogScrimClick"></a>

### "onDialogScrimClick"
Emitted when the dialog scrim is clicked.

**Kind**: event emitted by [<code>MdDialog</code>](#MdDialog)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The original click event. |

<a name="MdDialog.properties"></a>

### MdDialog.properties
Properties for the MdDialog custom element.

**Kind**: static property of [<code>MdDialog</code>](#MdDialog)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [fullScreen] | <code>boolean</code> | Determines whether the dialog should be displayed in full-screen mode. |
| [open] | <code>boolean</code> | Determines whether the dialog is open. |
| [leadingIcons] | <code>Array.&lt;string&gt;</code> | An array of leading icons to be displayed in the dialog header. |
| [label] | <code>string</code> | The label for the dialog. |
| [trailingIcons] | <code>Array.&lt;string&gt;</code> | An array of trailing icons to be displayed in the dialog header. |
| [buttons] | <code>Array.&lt;DialogButton&gt;</code> | An array of buttons to be displayed in the dialog footer. |
| [body] | <code>Array.&lt;Node&gt;</code> | An array of content elements to be displayed in the dialog body. |

