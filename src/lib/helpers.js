export function seriealizedNonPOJOs(object) {
	return JSON.parse(JSON.stringify(object));
}

export function hasProperties(object){
  return object && object.constructor === Object && Object.keys(object).length >= 1;
}