import { describe, expect, it } from "vitest";
import { findValue } from "../src/utils/objects";

describe("findValue function", () => {
	it("should return an array containing key-value pairs where the value matches the given value", () => {
		const testObject = { a: 1, b: 2, c: 3, d: 1, e: 2 };
		const find = 1;

		const result = findValue(testObject, find);

		expect(result).toEqual([
			["a", 1],
			["d", 1],
		]);
	});

	it("should return an empty array if the value is not found", () => {
		const testObject = { a: 1, b: 2, c: 3, d: 1, e: 2 };
		const find = 5;

		const result = findValue(testObject, find);

		expect(result).toEqual([]);
	});
});
