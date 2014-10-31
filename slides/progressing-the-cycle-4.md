##  Progressing the Cycle
### Refactoring

```
Plugin.prototype = {
    init: function () {
        setDigits(this.element, this.options.minutes);
    },
    setMinutes: function (minutes) {
        this.options.minutes = minutes;
        setDigits(this.element, minutes);
    }
};

function setDigits(element, minutes) {
    $(element).text(minutes + ":00");
}
```
