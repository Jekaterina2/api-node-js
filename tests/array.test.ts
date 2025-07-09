import { test, expect, request } from '@playwright/test';

test('Array test with 3 numbers displaying length', () => {
    let i = [10,11,12];
    console.log(i.length);
});

test('Array test with 2 strings, add 3rd string', () => {
    let k = ['a','b'];
    k.push('c');
    console.log(k.length);
    console.log(k);
})
test('Array test 3 string test, delete 1', () => {
    let m = ['a','b','c'];
    m.pop();
    console.log(m.length);
    console.log(m);
})
test('Array test with empty numbers using push loop to add 2 numbers separately', () => {
    let n = [];
    n.push(10);
    console.log(n.length);
    console.log(n);
    n.push(11);
    console.log(n.length);
    console.log(n);
})
test('Array test with 5 numbers using a FOR loop to display values in the console', () => {
    let o = [15,16,17,18,19];
    for (let i = 0; i < o.length; i++) {
        console.log(o[i]);
    }
})
test('Array test with 5 numbers using a FOR loop to display length in the console', () => {
    let p = [15,16,17,18,19];
    console.log(p.length);
})
test('Array test with 3 numbers using a FOR loop to create a new array where each element is equal to the corresponding element of the original array multiplied by 2', () => {
    let q = [2,4,6];
    let r = [];
    for (let i = 0; i < q.length; i++) {
        r.push(q[i]*2);
    }
    console.log(r);
})
test('Array test with 3 numbers using a FOR loop to print the elements of the array in reverse order', () => {
    let s = [1,2,3];
    for (let i = s.length-1; i >= 0; i--) {
        console.log(s[i]);
    }
})
test('Array test with numbers display the highest number', () => {
    let t = [17,101,13,61,11];
    let max = t[0];
    for (let i = 0; i < t.length; i++) {
        if (t[i] > max) {
            max = t[i];
        }
    }
    console.log(max);
})
test('Array test with numbers display the lowest number', () => {
    let u = [17,101,13,61,11];
    let min = u[0];
    for (let i = 0; i < u.length; i++) {
        if (u[i] < min) {
            min = u[i];
        }
    }
    console.log(min);
})
test('Array test with numbers, count how many even numbers are in the array', () => {
    let v = [18,101,13,61,11];
    let count = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i] % 2 === 0) {
            count++;
        }
    }
    console.log(count);
})
test('Array test with numbers, collect the positive numbers into a new array', () => {
    let w = [-18,101,-13,61,11];
    let positive = [];
    for (let i = 0; i < w.length; i++) {
        if (w[i] > 0) {
            positive.push(w[i]);
        }
    }
    console.log(positive);
})