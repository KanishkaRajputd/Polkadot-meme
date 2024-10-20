// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import messages from "./messsages";

async function nextApiClientFetch<T>(url: string, data?: { [key: string]: unknown } | FormData | any, method?: 'GET' | 'POST'): Promise<{ data?: T; error?: string }> {

	const currentURL = new URL(window.location.href);

	const headers: Record<string, string> = {
		'x-network': process.env.PUBLIC_NETWORK || 'polkadot'
	};

	if (!(data instanceof FormData)) {
		headers['Content-Type'] = 'application/json';
	}

	const response = await fetch(`${window.location.origin}/${url}`, {
		body: data instanceof FormData ? data : JSON.stringify(data),
		credentials: 'include',
		headers,
		method: method || 'POST'
	});

	const resJSON = await response.json();

	if (response.status === 200) {
		return {
			data: resJSON as T
		};
	}

	return {
		error: resJSON.message || messages.API_FETCH_ERROR
	};
}

export default nextApiClientFetch;
