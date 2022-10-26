console.log('Pocketbase.js called');
import PocketBase from 'pocketbase';

export const client = new PocketBase('http://127.0.0.1:8090');

export function addAuthHeader(accessToken) {
	client.beforeSend = (url, reqConfig) => {
		reqConfig.headers = Object.assign({}, reqConfig.headers, {
			Authorization: 'User ' + accessToken,
		});
		return reqConfig;
	};
}
