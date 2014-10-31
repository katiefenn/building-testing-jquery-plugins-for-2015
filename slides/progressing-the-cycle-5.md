##  Progressing the Cycle
### Exposing behaviour

```
Plugin.prototype = {
    init: function () {
        $(this.element).text(this.options.minutes + ":00");
    },
    setMinutes: function (minutes) {
        this.options.minutes = minutes;
        $(this.element).text(this.options.minutes + ":00");
    }
};
```
