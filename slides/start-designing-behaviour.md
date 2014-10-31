##  Start Designing Behaviour

"The timer widget should display a start time of two minutes when invoked"

```
// test/spec/test.js

describe('The timer widget', function () {

    it('should display a start time of two minutes when invoked', function () {
        fixture.timer();
        expect(fixture.text()).toEqual('2:00');
    });

});
```
