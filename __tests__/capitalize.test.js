import { capitalize } from "../src/capitalize.js";

let string;
beforeAll(() => {
    string = 'hello';
})

describe('capitalize', () => {
    test('main', () => {
        expect(capitalize(string)).toEqual('Hello');
        expect(capitalize('')).toEqual('');
    });
});