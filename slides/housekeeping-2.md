##  Housekeeping
### Loading a fixture with jquery-ajax
```
describe('Timer: ', function () {
    beforeEach(function () {
        loadFixtures('fixture.html');
        fixture = $('.fixture');
    });

    afterEach(function () {
        fixture.empty();
    });

    it('Should display a start time of two minutes when invoked', function () {
        fixture.timer();
        expect(fixture.text()).toEqual('2:00');
    });
});
```
