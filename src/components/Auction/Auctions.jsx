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
        <>
            {/* Large screen table row */}
            <tr className='hidden sm:grid grid-cols-4 border-b border-gray-300'>
                <td className="py-3">
                    <div className="flex items-center gap-3">
                        <img className="h-12 w-12 rounded-2xl" src={auction.image} alt="" />
                        <span className="font-semibold">{auction.title}</span>
                    </div>
                </td>

                <td className="text-center py-3">${auction.currentBidPrice}</td>
                <td className="text-center py-3">{auction.timeLeft} left</td>
                <td className="text-center py-3">
                    <button
                        onClick={handleBid}
                        disabled={localFavorite}
                        className={`mx-auto ${localFavorite ? 'text-red-500 cursor-not-allowed' : 'hover:text-red-500 transition-colors'}`}
                    >
                        {localFavorite ? <FaHeart size={30} /> : <CiHeart size={30} />}
                    </button>
                </td>
            </tr>

            {/* Small screen stacked card */}
            <div className="sm:hidden border-b border-gray-300 p-4">
                <div className="flex items-center gap-3 mb-2">
                    <img className="h-12 w-12 rounded-2xl" src={auction.image} alt="" />
                    <span className="font-semibold text-lg">{auction.title}</span>
                </div>
                <div className="flex justify-between mb-1">
                    <span className="font-semibold">Current Bid:</span>
                    <span>${auction.currentBidPrice}</span>
                </div>
                <div className="flex justify-between mb-1">
                    <span className="font-semibold">Time Left:</span>
                    <span>{auction.timeLeft} left</span>
                </div>
                <div className="flex justify-center mt-2">
                    <button
                        onClick={handleBid}
                        disabled={localFavorite}
                        className={`btn btn-primary w-full ${localFavorite ? 'cursor-not-allowed opacity-50' : 'hover:bg-red-500 hover:text-white'}`}
                    >
                        {localFavorite ? 'Bid Placed' : 'Place Bid'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Auctions;