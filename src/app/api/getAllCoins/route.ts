import withErrorHandling from "@/api-middleware/withErrorHandling";
import { APIError } from "../../../utils/exceptions";
import { firestore_db } from "@/services/firebaseinit";
import { ICoin } from "@/types";
import MESSAGES from "@/utils/messsages";
import { NextResponse } from "next/server";

export const GET = withErrorHandling(async () => {

        const allCoinsRefSnapshot = await firestore_db.collection('coins').get();

        if(allCoinsRefSnapshot.empty){
            throw new APIError(MESSAGES.NO_DATA_FOUND, 400);
        }

        const allCoins: ICoin[] = [];
        allCoinsRefSnapshot.docs?.map((doc)=>{
           if(doc?.exists){
               const data = doc?.data();
               console.log(data);
               const payload: ICoin = {
                   createdAt: data?.created_at?.toDate ? data?.created_at?.toDate() : data?.created_at,
                   limit: data?.limit,
                   logoImage: data?.logo_image,
                   mintCount: data?.minted_addresses?.length || 0,
                   mintedByAddresses: data?.minted_addresses || [],
                   name: data?.name,
                   network: data?.network,
                   proposer: data?.proposer,
                   title: data?.title,
                   totalSupply: data?.total_supply
               }

               allCoins?.push(payload);
           }
       });
    
		return NextResponse.json({data: allCoins || []})

});