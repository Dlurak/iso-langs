/**
 * A union type of all translations that must exist for all languages
 */
type NecessaryShortcut = "native" | "de" | "en";

/**
 * The type for an object of translations. Every translations must at least include all the `NecessaryShortcut`
 * @example
 * ```typescript
 * const shortcuts: LanguageShortcut = {
 *	native: "tlhIngan Hol",
 *	de: "Klingonisch",
 *	en: "Klingon",
 *	fr: "Klingon",
 *	ja: "クリンゴン語",
 * }
 * ```
 */
export type LanguageShortcut = Record<NecessaryShortcut, string> &
	Record<string, string>;

/**
 * A mapping of iso language shortcuts to the full name in different languages
 */
export const languageShortcuts = {
	en: {
		native: "English",
		de: "Englisch",
		en: "English",
		fr: "Anglais",
		ja: "英語",
		tlh: "qaHvam Hol",
		la: "Anglica",
		sl: "angleščina",
		it: "inglese",
		ru: "английский",
		es: "inglés",
		eo: "angla",
	} as const,
	de: {
		native: "Deutsch",
		de: "Deutsch",
		en: "German",
		fr: "Allemand",
		ja: "ドイツ語",
	} as const,
	fr: {
		native: "Français",
		de: "Französisch",
		en: "French",
		fr: "Français",
		ja: "フランス語",
	} as const,
	ja: {
		native: "日本語",
		de: "Japanisch",
		en: "Japanese",
		fr: "Japonais",
		ja: "日本語",
	} as const,
	ru: {
		native: "Русский",
		de: "Russisch",
		en: "Russian",
		fr: "Russe",
		ja: "ロシア語",
	} as const,
	es: {
		native: "Español",
		de: "Spanisch",
		en: "Spanish",
		fr: "Espagnol",
		ja: "スペイン語",
	} as const,
	pt: {
		native: "Português",
		de: "Portugiesisch",
		en: "Portuguese",
		fr: "Portugais",
		ja: "ポルトガル語",
	} as const,
	zh: {
		native: "中文",
		de: "Chinesisch",
		en: "Chinese",
		fr: "Chinois",
		ja: "中国語",
	} as const,
	ar: {
		native: "العربية",
		de: "Arabisch",
		en: "Arabic",
		fr: "Arabe",
		ja: "アラビア語",
	} as const,
	hi: {
		native: "हिन्दी",
		de: "Hindi",
		en: "Hindi",
		fr: "Hindi",
		ja: "ヒンディー語",
	} as const,
	ko: {
		native: "한국어",
		de: "Koreanisch",
		en: "Korean",
		fr: "Coréen",
		ja: "韓国語",
	} as const,
	it: {
		native: "Italiano",
		de: "Italienisch",
		en: "Italian",
		fr: "Italien",
		ja: "イタリア語",
	} as const,
	nl: {
		native: "Nederlands",
		de: "Niederländisch",
		en: "Dutch",
		fr: "Néerlandais",
		ja: "オランダ語",
	} as const,
	cs: {
		native: "Čeština",
		de: "Tschechisch",
		en: "Czech",
		fr: "Tchèque",
		ja: "チェコ語",
	} as const,
	sl: {
		native: "Slovenščina",
		de: "Slowenisch",
		en: "Slovenian",
		fr: "Slovène",
		ja: "スロベニア語",
	} as const,
	la: {
		native: "Latina",
		de: "Lateinisch",
		en: "Latin",
		fr: "Latin",
		ja: "ラテン語",
	} as const,
	da: {
		native: "Dansk",
		de: "Dänisch",
		en: "Danish",
		fr: "Danois",
		ja: "デンマーク語",
	} as const,
	eo: {
		native: "Esperanto",
		de: "Esperanto",
		en: "Esperanto",
		fr: "Espéranto",
		ja: "エスペラント語",
	} as const,
	et: {
		native: "Eesti keel",
		de: "Estnisch",
		en: "Estonian",
		fr: "Estonien",
		ja: "エストニア語",
	} as const,
	el: {
		native: "Ελληνικά",
		de: "Griechisch",
		en: "Greek",
		fr: "Grec",
		ja: "ギリシャ語",
	} as const,
	is: {
		native: "Íslenska",
		de: "Isländisch",
		en: "Icelandic",
		fr: "Islandais",
		ja: "アイスランド語",
	} as const,
	tlh: {
		native: "tlhIngan Hol",
		de: "Klingonisch",
		en: "Klingon",
		fr: "Klingon",
		ja: "クリンゴン語",
	} as const,
	sq: {
		native: "Shqip",
		de: "Albanisch",
		en: "Albanian",
		fr: "Albanais",
		ja: "アルバニア語",
	} as const,
	na: {
		native: "Dorerin Naoero",
		de: "Nauruisch",
		en: "Nauruan",
		fr: "Nauruan",
		ja: "ナウル語",
	} as const,
	ne: {
		native: "नेपाली",
		de: "Nepalesisch",
		en: "Nepali",
		fr: "Népalais",
		ja: "ネパール語",
	} as const,
	mm: {
		native: "Монгол хэл",
		de: "Mongolisch",
		en: "Mongolian",
		fr: "Mongol",
		ja: "モンゴル語",
	} as const,
	iu: {
		native: "ᐃᓄᒃᑎᑐᑦ",
		de: "Inuktitut",
		en: "Inuktitut",
		fr: "Inuktitut",
		ja: "イヌクティトゥット語",
	} as const,
	kl: {
		native: "Kalaallisut",
		de: "Grönländisch",
		en: "Greenlandic",
		fr: "Groenlandais",
		ja: "グリーンランド語",
	} as const,
	fi: {
		native: "Suomi",
		de: "Finnisch",
		en: "Finnish",
		fr: "Finnois",
		ja: "フィンランド語",
	} as const,
	fj: {
		native: "Na Vosa Vakaviti",
		de: "Fidschianisch",
		en: "Fijian",
		fr: "Fidjien",
		ja: "フィジー語",
	} as const,
	zu: {
		native: "isiZulu",
		de: "Zulu",
		en: "Zulu",
		fr: "Zoulou",
		ja: "ズールー語",
	} as const,
	vi: {
		native: "Tiếng Việt",
		de: "Vietnamesisch",
		en: "Vietnamese",
		fr: "Vietnamien",
		ja: "ベトナム語",
	} as const,
	ur: {
		native: "اردو",
		de: "Urdu",
		en: "Urdu",
		fr: "Ourdou",
		ja: "ウルドゥー語",
	} as const,
	uk: {
		native: "Українська",
		de: "Ukrainisch",
		en: "Ukrainian",
		fr: "Ukrainien",
		ja: "ウクライナ語",
	} as const,
	bg: {
		native: "български",
		de: "Bulgarisch",
		en: "Bulgarian",
		fr: "Bulgare",
		ja: "ブルガリア語",
	} as const,
} satisfies Record<string, LanguageShortcut>;
