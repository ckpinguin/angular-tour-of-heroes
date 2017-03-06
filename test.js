"use strict";
exports.__esModule = true;
var tape_1 = require("tape");
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./src/app/app.component");
var before = tape_1["default"];
var after = tape_1["default"];
// beforeEach/afterEach rely on shared state.
// That's a big anti-pattern for testing.
// It's also silly to run something before and after
// ever test -- many of your tests won't need it.
// Try this, instead:
var setup = function () {
    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
    // Insert your fixture code here.
    // Make sure you're creating fresh objects each
    // time setup() is called.
    return fixture;
};
var teardown = function (fixture) {
    // Dispose of your fixtures here.
    fixture = {};
};
before('before', function (assert) {
    testing_1.TestBed.configureTestingModule({
        declarations: [
            app_component_1.AppComponent
        ]
    }).compileComponents();
});
tape_1["default"]('Create the app', function (assert) {
    var fixture = setup();
    var app = fixture.debugElement.componentInstance;
    assert(app).toBeTruthy();
    teardown(fixture);
    assert.end();
});
tape_1["default"]('Render title in a h1 tag', function (assert) {
    var fixture = setup();
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;
    assert(compiled.querySelector('h1').textContent).toContain('app works!');
    teardown(fixture);
    assert.end();
});
tape_1["default"]('A test with fixtures', function (assert) {
    var fixture = setup();
    assert.equal(typeof fixture, 'object', 'fixture should return an object');
    teardown(fixture);
    assert.end();
});
tape_1["default"]('A passing test', function (assert) {
    assert.pass('This test will pass.');
    assert.end();
});
tape_1["default"]('Assertions with tape.', function (assert) {
    var expected = 'something to test';
    var actual = 'sonething to test';
    assert.equal(actual, expected, 'Given two mismatched values, .equal() should produce a nice bug report');
    assert.end();
});
/**test('Greet World', (assert) => new Promise((resolve) => {
    assert.equal(console.log('World'), 'Hello, World!');

    setTimeout(() => {
        // do some async stuff
        resolve();
    }, 10);
}));**/
after('after', function (assert) {
    assert.pass('Do something after tests here.');
    assert.end();
});
