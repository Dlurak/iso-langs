import { describe, expect, it } from "vitest";
import { getLanguageFromString } from "../src/";

describe("getLanguageFromString function", () => {
	it("works", () => {
		expect(getLanguageFromString("Deutsch")).toBe("de");
		expect(getLanguageFromString("English")).toBe("en");
		expect(getLanguageFromString("フランス語")).toBe("fr");
		expect(getLanguageFromString("Ukrainien")).toBe("uk");
	});

	it("returns undefined when it does'n work", () => {
		expect(getLanguageFromString("no lang")).toBeUndefined();
		expect(getLanguageFromString("english")).toBeUndefined();
	});
});
