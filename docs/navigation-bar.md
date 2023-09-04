## Classes

<dl>
<dt><a href="#MdNavigationBar">MdNavigationBar</a> ⇐ <code>MdList</code></dt>
<dd><p>Represents a custom element for displaying a navigation bar.
Extends the MdList base class.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#md-navigation-bar">md-navigation-bar</a> : <code><a href="#MdNavigationBar">MdNavigationBar</a></code></dt>
<dd><p>Custom element representing a navigation bar.</p>
</dd>
</dl>

<a name="MdNavigationBar"></a>

## MdNavigationBar ⇐ <code>MdList</code>
Represents a custom element for displaying a navigation bar.Extends the MdList base class.

**Kind**: global class  
**Extends**: <code>MdList</code>  
**Element**: md-navigation-bar  
<a name="MdNavigationBar+connectedCallback"></a>

### mdNavigationBar.connectedCallback()
Callback invoked when the element is connected to the DOM.Adds the 'md-navigation-bar' and 'md-list--navigation-bar' classes to the element's class list.

**Kind**: instance method of [<code>MdNavigationBar</code>](#MdNavigationBar)  
**Example**  
```js
const navigationBar = document.querySelector('#myNavigationBar');navigationBar.connectedCallback();
```
<a name="md-navigation-bar"></a>

## md-navigation-bar : [<code>MdNavigationBar</code>](#MdNavigationBar)
Custom element representing a navigation bar.

**Kind**: global typedef  
**Example**  
```js
<md-navigation-bar></md-navigation-bar>
```
