import { NextApiHandler } from "next";
import messages from "@/utils/messsages";
import withErrorHandling from "@/api-middleware/withErrorHandling";
import { firestore_db } from "@/services/firebaseinit";
import { ICoin } from "@/types";


const handler: NextApiHandler<ICoin[] | {message: any | string}> = async (req, res) => {
	try {
		const network = String(req.headers['x-network']);

		if (!network) {
			return res.status(400).json({ message: messages.INVALID_NETWORK });
		}
        const allCoinsRefSnapshot = await firestore_db.collection('coins').get();

        if(allCoinsRefSnapshot.empty){
            return res.status(500).json({ message: messages?.NO_DATA_FOUND  });
        }

        const allCoins: ICoin[] = [];
         allCoinsRefSnapshot.docs?.map((doc)=>{
            if(doc?.exists){
                const data = doc?.data();
                const payload: ICoin = {
                    createdAt: data?.created_at?.toDate?data?.created_at?.toDate():data?.created_at,
                    limit: data?.limit,
                    logoImage: data?.logo_image,
                    mintCount: data?.mint_addresses?.length || 0,
                    mintedByAddresses: data?.mint_addresses || [],
                    name: data?.name,
                    network: data?.network,
                    proposer: data?.proposer,
                    title: data?.title,
                    totalSupply: data?.total_supply
                }

                allCoins?.push(payload);
            }
        });

    
		return res.status(200).json(allCoins || []);

	} catch (err) {
		return res.status(500).json({ message: err || messages.API_FETCH_ERROR });
	}
};

export default withErrorHandling(handler);
