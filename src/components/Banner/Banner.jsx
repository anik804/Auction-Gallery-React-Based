import React from 'react';
import bannerImage from './Banner-min.jpg';

const Banner = () => {
    return (
        <div>
            <div
                className="min-h-120 bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="text-neutral-content">
                    <div className='w-5/6 mx-auto py-40'>
                        <h1 className="mb-6 text-5xl font-bold">
                            Bid on Unique Items from<br/>Around the World
                        </h1>
                        <p className="mb-6 text-gray-300">
                            Discover rare collectibles, luxury goods, and vintage<br/>treasures in our curated auctions
                        </p>
                        <button className="btn btn-primary rounded-4xl w-40 bg-white text-black">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
