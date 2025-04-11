import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Auctions = ({auction, handleItem}) => {
    const [localFavorite, setLocalFavorite] = useState(auction.isFavorite);

    // Reset localFavorite when isFavorite prop changes
    React.useEffect(() => {
      setLocalFavorite(auction.isFavorite);
    }, [auction.isFavorite]);

    const handleBid = () => {
        if (localFavorite) return;
        
        setLocalFavorite(true);
        handleItem({...auction, isFavorite: true});
    };

    return (
        <div>
            <tr className='grid grid-cols-4 border-b-1'>
                <td className="">
                    <div className="flex items-center my-auto gap-3 py-3">
                        <img className="h-12 w-12 rounded-2xl" src={auction.image} alt="" />
                        <span className="font-semibold">{auction.title}</span>
                    </div>
                </td>

                <td className="text-center my-auto">${auction.currentBidPrice}</td>
                <td className="text-center my-auto">{auction.timeLeft} left</td>
                <button
                    onClick={handleBid}
                    disabled={localFavorite}
                    className={`mx-auto ${localFavorite ? 'text-red-500 cursor-not-allowed' : 'hover:text-red-500 transition-colors'}`}
                >
                    {localFavorite ? <FaHeart size={30} /> : <CiHeart size={30} />}
                </button>
            </tr>
        </div>
    );
};

export default Auctions;