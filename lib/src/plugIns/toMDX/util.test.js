"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
describe('fit', function () {
    context('when standard is longer than string length', function () {
        it('returns string that meet standard', function () {
            expect((0, util_1.fit)(7, 'this')).toBe('this   ');
        });
    });
    context('when case is not longer than string', function () {
        it('returns orignal string', function () {
            expect((0, util_1.fit)(2, 'this')).toBe('this');
        });
    });
    context('when string is not provided', function () {
        it('returns spaces', function () {
            expect((0, util_1.fit)(3)).toBe('   ');
        });
    });
});
describe('range', function () {
    it('returns array of 0 to given value - 1', function () {
        expect((0, util_1.range)(4)).toEqual([0, 1, 2, 3]);
    });
});
