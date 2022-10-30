import { capitalize } from "../src/capitalize.js";

let string;
beforeAll(() => {
    string = 'hello';
})

test(
    'capitalize',
    () => {
        expect(capitalize(string)).toEqual('Hello');
        expect(capitalize('')).toEqual('');
    }
)