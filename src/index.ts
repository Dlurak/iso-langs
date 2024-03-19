import { languageShortcuts } from "./constants/languages";
import { findValue } from "./utils/objects";

/**
 * Finds the language code based on a given string representation of a language.
 * @param str The string representation of the language, this is case sensitive!
 * @returns The language code if found, otherwise undefined.
 * @example
 * ```typescript
 * expect(getLanguageFromString("Deutsch")).toBe("de");
 * ```
 * @example
 * ```typescript
 * expect(getLanguageFromString("English")).toBe("en");
 * ```
 * @example
 * ```typescript
 * expect(getLanguageFromString("日本語")).toBe("ja");
 * ```
 * @example
 * ```typescript
 * expect(getLanguageFromString("no lang")).toBe(undefined);
 * ```
 */
export function getLanguageFromString(str: string) {
	const entries = Object.entries(languageShortcuts);

	for (const entry of entries) {
		const found = findValue(entry[1], str);
		if (found.length >= 1) return entry[0];
	}

	return undefined;
}

export { languageShortcuts };
export { LanguageShortcut } from "./constants/languages";
