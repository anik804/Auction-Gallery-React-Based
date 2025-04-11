import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white text-primary-content pt-6 my-6">
                <aside>
                    <p className="font-bold text-2xl">
                        <span className='text-sky-800'>Auction</span> <span className='text-yellow-300'>Gallery</span>
                    </p>
                    <div className='flex items-center justify-center gap-4 font-bold text-black'>
                        <h1>Bid.</h1>
                        <h1>Win.</h1>
                        <h1>Own.</h1>
                    </div>
                </aside>
                <div className="grid grid-flow-col gap-3 font-bold text-black">
                        <a href=''>Home</a>
                        <a href=''>Auctions</a>
                        <a href=''>Categories</a>
                        <a href=''>How to works</a>
                </div>
                <p className='text-black'>©2025 AuctionHub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;