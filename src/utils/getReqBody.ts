// Copyright 2019-2025 @polkassembly/fellowship authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MESSAGES from "./messsages";


export default async function getReqBody(req: Request) {
	try {
		return await req.json();
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(MESSAGES.REQ_BODY_ERROR, 500);
		return {};
	}
}