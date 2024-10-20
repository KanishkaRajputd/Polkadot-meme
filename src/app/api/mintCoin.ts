import { NextApiHandler } from "next";
import messages from "@/utils/messsages";
import withErrorHandling from "@/api-middleware/withErrorHandling";
import { firestore_db } from "@/services/firebaseinit";
import getEncodedAddress from "@/utils/getEncodedAddress";

const handler: NextApiHandler<{message: any | string}> = async (req, res) => {
	try {
		const network = String(req.headers['x-network']);

		if (!network) {
			return res.status(400).json({ message: messages.INVALID_NETWORK });
		}

        const { coinName, mintingAddress } = req?.body;

        if(!coinName?.length|| !mintingAddress?.length || !getEncodedAddress(mintingAddress, network)){
            return res.status(500).json({ message: messages?.INVALID_PARAMS  });
        }

        const coinRefSnapshot =  firestore_db.collection('coins').doc(coinName);
        const coinRefDoc = await coinRefSnapshot?.get();


        if(!coinRefDoc.exists){
            return res.status(500).json({ message: messages?.MEME_COIN_DOES_NOT_EXISTS  });
        }

        const coinData = coinRefDoc?.data();

        if(coinData?.minted_addresses?.includes(getEncodedAddress(mintingAddress, network) || mintingAddress)){
            return res.status(500).json({ message: messages?.MEME_COIN_ALREADY_MINTED  });
        }


        const payload = {
           minted_addresses: [...coinData?.minted_addresses, getEncodedAddress(mintingAddress, network) || mintingAddress]
        }
        
        await coinRefSnapshot?.update(payload);
    
		return res.status(200).json({ message: messages?.MEME_COIN_MINTED_SUCCESSFULLY });

	} catch (err) {
		return res.status(500).json({ message: err || messages.API_FETCH_ERROR });
	}
};

export default withErrorHandling(handler);
