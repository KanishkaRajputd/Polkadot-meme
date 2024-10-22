// Copyright 2019-2025 @polkassembly/fellowship authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withErrorHandling = (handler: { (req: NextRequest, options?: any): Promise<NextResponse> }) => {
	return async (req: NextRequest, options: object) => {
		// CORS preflight request
		if (req.method === 'OPTIONS') return NextResponse.json(null, { status: 200 });

		try {
			return await handler(req, options);
		} catch (error) {
			const err = error;
			// eslint-disable-next-line no-console
			console.log('Error in API call : ', req.nextUrl);
			console.log({ err });
			return NextResponse.json({ message: err }, { status: (err as any)?. status });
		}
	};
};

export default withErrorHandling;