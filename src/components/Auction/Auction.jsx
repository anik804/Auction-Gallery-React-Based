import React, { useEffect, useState } from 'react';
import Auctions from './Auctions';

const Auction = ({handleItem}) => {

    const [auction,setAuctions] = useState([])

    useEffect(() =>{
        fetch("auction.json")
        .then(res => res.json())
        .then(data => setAuctions(data))
    },[])

   // console.log(auction)

    return (
        <div>
            <div className='all-auctions'>
            {
                auction.map(auction => <Auctions key={auction.id}  auction={auction} handleItem={handleItem}></Auctions>)
            }
            </div>
        </div>
    );
};

export default Auction;