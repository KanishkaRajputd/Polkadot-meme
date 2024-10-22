interface Props{
    className?: string;
}

const TokensListing =({className}: Props)=>{
    return <div className={className}>

        <label className="text-2xl font-semibold text-primaryText">Meme Tokens</label>

    </div>
}

export default TokensListing;