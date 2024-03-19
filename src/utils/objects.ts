export function findValue<T>(object: Record<string | number, T>, find: T) {
	const entries = Object.entries(object);
	const filtered = entries.filter((i) => i[1] === find);

	return filtered;
}
