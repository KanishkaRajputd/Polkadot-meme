import { NextApiHandler } from "next";
import messages from "@/utils/messsages";
import withErrorHandling from "@/api-middleware/withErrorHandling";
import { firestore_db } from "@/services/firebaseinit";
import { IFirebaseCoin, ZERO_BN } from "@/types";
import { BN } from "bn.js";
import getEncodedAddress from "@/utils/getEncodedAddress";


const handler: NextApiHandler<{message: any | string}> = async (req, res) => {
	try {
		const network = String(req.headers['x-network']);

		if (!network) {
			return res.status(400).json({ message: messages.INVALID_NETWORK });
		}

        const {name, totalSupply, title, content, limit, logoImage, proposer} = req?.body;

        if(!name?.length || !title?.length || !content?.length || new BN(limit || '0').eq(ZERO_BN) || !logoImage?.length || !proposer?.length || !getEncodedAddress(proposer, network)){
            return res.status(500).json({ message: messages?.INVALID_PARAMS  });
        }

        const coinRefSnapshot =  firestore_db.collection('coins').doc(name);
        const coinRefDoc = await coinRefSnapshot?.get();


        if(coinRefDoc.exists){
            return res.status(500).json({ message: messages?.MEME_COIN_ALLREADY_EXISTS  });
        }

        const payload: IFirebaseCoin = {
            content: content || '',
            created_at: new Date(),
            limit: limit,
            logo_image: logoImage,
            name: name,
            network: network,
            proposer: getEncodedAddress(proposer, network) || proposer,
            title: title || '',
            total_supply: totalSupply,
        }
        
        await coinRefSnapshot?.set(payload, {merge: true});
    
		return res.status(200).json({ message: messages?.MEME_COIN_CREATED_SUCCESSFULLY });

	} catch (err) {
		return res.status(500).json({ message: err || messages.API_FETCH_ERROR });
	}
};

export default withErrorHandling(handler);
