import { max2, max3 } from '../esercizi.js';

test('max2', () => {
	expect(max2(1, 2)).toBe(2);
	expect(max2(2, 1)).toBe(2);
	expect(max2(1, 1)).toBe(1);
});

test('max3', () => {
	expect(max3(1, 2, 3)).toBe(3);
	expect(max3(1, 3, 2)).toBe(3);
	expect(max3(3, 1, 2)).toBe(3);
	expect(max3(3, 2, 1)).toBe(3);
	expect(max3(2, 3, 1)).toBe(3);
	expect(max3(2, 1, 3)).toBe(3);
	expect(max3(1, 1, 1)).toBe(1);
});