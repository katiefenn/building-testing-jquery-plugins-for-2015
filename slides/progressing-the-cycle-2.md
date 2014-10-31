##  Progressing the Cycle
### Adding default minutes option

```
var pluginName = "timer",
    defaults = {
        propertyName: "value",
        minutes: 2
    };

...

Plugin.prototype = {
    init: function () {
        $(this.element).text(this.options.minutes + ":00");
    }
};
```
