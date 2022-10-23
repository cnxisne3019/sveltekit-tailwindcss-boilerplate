export function seriealizedNonPOJOs(object) {
	return JSON.parse(JSON.stringify(object));
}
 