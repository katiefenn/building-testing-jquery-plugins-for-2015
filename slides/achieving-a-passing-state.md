##  Achieving a passing state

Adding behaviour to init method to pass test

```
// In the module section of the plugin
Plugin.prototype = {
    init: function () {
        $(this.element).text("2:00");
    }
};
```
