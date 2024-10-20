import messages from '@/utils/messsages';
import { NextApiHandler } from 'next';

type TWithErrorHandling = (handler: NextApiHandler) => NextApiHandler;

const withErrorHandling: TWithErrorHandling = (handler) => {
	return async (req, res) => {
		if (req.method === 'OPTIONS') return res.status(200).end();

		try {
			await handler(req, res);
		} catch (error: any ) {
			console.log('Error in API : ', error);
			return res.status(Number(error.name) || 500).json({
				...error,
				message: error.message || messages.API_FETCH_ERROR
			});
		}
	};
};

export default withErrorHandling;
