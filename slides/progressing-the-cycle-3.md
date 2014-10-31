##  Progressing the Cycle
### Exposing behaviour

```
Plugin.prototype = {
    init: function () {
        $(this.element).text(this.options.minutes + ":00");
    },
    setMinutes: function (minutes) {
        $(this.element).text(this.options.minutes + ":00"); 
    }
};
```

```$('.fixture').data('plugin_timer').setMinutes(6)```
