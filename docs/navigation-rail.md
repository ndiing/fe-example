<a name="MdNavigationRail"></a>

## MdNavigationRail ⇐ <code>MdElement</code>
Custom element representing a navigation-rail with various content and actions.

**Kind**: global class  
**Extends**: <code>MdElement</code>  
**Emits**: <code>MdNavigationRail#event:onNavigationRailIconClick - Fired when an icon in the navigation-rail header is clicked.</code>, <code>MdNavigationRail#event:onNavigationRailButtonClick - Fired when a button in the navigation-rail footer is clicked.</code>  
**Element**: md-navigation-rail  

* [MdNavigationRail](#MdNavigationRail) ⇐ <code>MdElement</code>
    * [new MdNavigationRail()](#new_MdNavigationRail_new)
    * _instance_
        * [.body](#MdNavigationRail+body) : <code>Array.&lt;Node&gt;</code>
        * [.render()](#MdNavigationRail+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdNavigationRail+connectedCallback)
        * [.handleNavigationRailIconClick(event)](#MdNavigationRail+handleNavigationRailIconClick)
        * [.handleNavigationRailButtonClick(event)](#MdNavigationRail+handleNavigationRailButtonClick)
    * _static_
        * [.properties](#MdNavigationRail.properties) : <code>Object</code>

<a name="new_MdNavigationRail_new"></a>

### new MdNavigationRail()
Constructs a new MdNavigationRail instance.

<a name="MdNavigationRail+body"></a>

### mdNavigationRail.body : <code>Array.&lt;Node&gt;</code>
An array of content elements extracted from child nodes.

**Kind**: instance property of [<code>MdNavigationRail</code>](#MdNavigationRail)  
<a name="MdNavigationRail+render"></a>

### mdNavigationRail.render() ⇒ <code>TemplateResult</code>
Renders the content of the MdNavigationRail custom element using lit-html.

**Kind**: instance method of [<code>MdNavigationRail</code>](#MdNavigationRail)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdNavigationRail+connectedCallback"></a>

### mdNavigationRail.connectedCallback()
Invoked when the element is added to the DOM.

**Kind**: instance method of [<code>MdNavigationRail</code>](#MdNavigationRail)  
<a name="MdNavigationRail+handleNavigationRailIconClick"></a>

### mdNavigationRail.handleNavigationRailIconClick(event)
Handles the click event on a navigation-rail icon.

**Kind**: instance method of [<code>MdNavigationRail</code>](#MdNavigationRail)  
**Emits**: <code>MdNavigationRail#event:onNavigationRailIconClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdNavigationRail+handleNavigationRailButtonClick"></a>

### mdNavigationRail.handleNavigationRailButtonClick(event)
Handles the click event on a navigation-rail button.

**Kind**: instance method of [<code>MdNavigationRail</code>](#MdNavigationRail)  
**Emits**: <code>MdNavigationRail#event:onNavigationRailButtonClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The click event. |

<a name="MdNavigationRail.properties"></a>

### MdNavigationRail.properties : <code>Object</code>
Properties for the MdNavigationRail custom element.

**Kind**: static property of [<code>MdNavigationRail</code>](#MdNavigationRail)  
**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| leadingIcons | <code>Array.&lt;String&gt;</code> | An array of leading icons to be displayed in the navigation-rail header. |
| label | <code>String</code> | The label for the navigation-rail. |
| trailingIcons | <code>Array.&lt;String&gt;</code> | An array of trailing icons to be displayed in the navigation-rail header. |
| buttons | <code>Array.&lt;NavigationRailButton&gt;</code> | An array of buttons to be displayed in the navigation-rail footer. |
| body | <code>Array.&lt;Node&gt;</code> | An array of content elements to be displayed in the navigation-rail body. |

