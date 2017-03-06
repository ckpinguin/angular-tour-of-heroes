import test from 'blue-tape';
import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './src/app/app.component';

const before = test;
const after = test;

// beforeEach/afterEach rely on shared state.
// That's a big anti-pattern for testing.

// It's also silly to run something before and after
// ever test -- many of your tests won't need it.

// Try this, instead:
const setup = () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Insert your fixture code here.
    // Make sure you're creating fresh objects each
    // time setup() is called.
    return fixture;
};

const teardown = (fixture) => {
    // Dispose of your fixtures here.
    fixture = {};
};

before('before', function(assert) {
    TestBed.configureTestingModule({
        declarations: [
            AppComponent
        ],
    }).compileComponents();
});

test('Create the app', (assert) => {
    const fixture = setup();

    const app = fixture.debugElement.componentInstance;
    assert(app).toBeTruthy();

    teardown(fixture);
    assert.end();
});

test('Render title in a h1 tag', (assert) => {
    const fixture = setup();

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    assert(compiled.querySelector('h1').textContent).toContain('app works!');

    teardown(fixture);
    assert.end();
});

test('A test with fixtures', (assert) => {
    const fixture = setup();

    assert.equal(typeof fixture, 'object', 'fixture should return an object');

    teardown(fixture);
    assert.end();
});

test('A passing test', (assert) => {

    assert.pass('This test will pass.');

    assert.end();
});

test('Assertions with tape.', (assert) => {
    const expected = 'something to test';
    const actual = 'sonething to test';

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

after('after', (assert) => {
    assert.pass('Do something after tests here.');

    assert.end();
});
