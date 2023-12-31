import * as chai from 'chai';
import { expect, assert } from 'chai';
import { setup } from 'mocha';

import { App } from "../src/app";

setup(() =>
{
    chai.should();  // needed for 'foo'.should.equal('foo') below.
});

describe('Sayings Greeter', () =>
{
    it('should be defined', () =>
    {
        assert(expect !== undefined, "expect undefined");
        'foo'.should.equal('foo');
    });

    it('should greet', () =>
    {
        var greeter = { name: 'John' };
        expect(greeter.name).to.equal('John');
    });
});

describe('App message', () =>
{
    var app = new App();

    it('should be defined', () =>
    {
        assert(app.message !== undefined, "expect undefined");
    });

    it('should equal', () =>
    {
        var greeter = { name: 'John' };
        expect(app.message).to.equal('Hello World!');
    });
});