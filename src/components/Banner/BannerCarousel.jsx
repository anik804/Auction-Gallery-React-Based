import React from 'react';
import bannerImage from './Banner-min.jpg';

const Banner = () => {
    return (
        <div>
            <div
                className="min-h-[30rem] sm:min-h-[40rem] md:min-h-[50rem] bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="text-neutral-content">
                    <div className='w-11/12 sm:w-5/6 mx-auto py-20 sm:py-32 md:py-40'>
                        <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Bid on Unique Items from<br className="hidden sm:block"/>Around the World
                        </h1>
                        <p className="mb-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            Discover rare collectibles, luxury goods, and vintage<br className="hidden sm:block"/>treasures in our curated auctions
                        </p>
                        <button className="btn btn-primary rounded-4xl w-32 sm:w-36 md:w-40 bg-white text-black">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
