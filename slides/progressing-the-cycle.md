##  Progressing the Cycle
### Adding configuration and interaction

```
it('Should display a given start time when supplied as an option', function () {
    fixture.timer({minutes: 3});
    expect(fixture.text()).toEqual('3:00');
});
```
