import { sum } from "./sum";

test("testing sum function", ()=>{
    expect(sum(10, 20)).toBe(30);
})