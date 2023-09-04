<a name="Ripple"></a>

## Ripple ⇐ <code>Module</code>
Represents a Ripple effect module that adds interactive ripples to an element.

**Kind**: global class  
**Extends**: <code>Module</code>  

* [Ripple](#Ripple) ⇐ <code>Module</code>
    * [new Ripple(element, options)](#new_Ripple_new)
    * [.init()](#Ripple+init)
    * [.mouseenter(event)](#Ripple+mouseenter)
    * [.mouseleave(event)](#Ripple+mouseleave)
    * [.mousedown(event)](#Ripple+mousedown)
    * [.mouseup(event)](#Ripple+mouseup)
    * [.focus(event)](#Ripple+focus)
    * [.blur(event)](#Ripple+blur)

<a name="new_Ripple_new"></a>

### new Ripple(element, options)
Creates an instance of the Ripple module.


| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | The target element to apply the ripple effect to. |
| options | <code>Object</code> | Additional options for configuring the ripple effect. |
| options.size | <code>number</code> | The size of the ripple, as a fraction of the element's size. |
| options.bounded | <code>boolean</code> | Whether the ripple effect should be bounded within the element's boundaries. |
| options.handle | <code>HTMLElement</code> | The element that triggers the ripple effect. Defaults to the target element. |

<a name="Ripple+init"></a>

### ripple.init()
Initializes the ripple effect module and sets up event listeners.

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  
<a name="Ripple+mouseenter"></a>

### ripple.mouseenter(event)
Handles the mouseenter event to apply hover effect.

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The mouse event. |

<a name="Ripple+mouseleave"></a>

### ripple.mouseleave(event)
Handles the mouseleave event to remove hover effect.

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The mouse event. |

<a name="Ripple+mousedown"></a>

### ripple.mousedown(event)
Handles the mousedown event to create and animate the ripple effect.

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The mouse event. |

<a name="Ripple+mouseup"></a>

### ripple.mouseup(event)
Handles the mouseup event to remove the pressed state.

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>MouseEvent</code> | The mouse event. |

<a name="Ripple+focus"></a>

### ripple.focus(event)
Handles the focus event to apply focus effect.

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>FocusEvent</code> | The focus event. |

<a name="Ripple+blur"></a>

### ripple.blur(event)
Handles the blur event to remove focus effect.

**Kind**: instance method of [<code>Ripple</code>](#Ripple)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>FocusEvent</code> | The blur event. |

