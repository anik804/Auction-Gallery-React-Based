
import { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { RxCross2 } from "react-icons/rx"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Auction from './components/Auction/Auction'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'


function App() {

  const [auctions, setAuctions] = useState([]);
  const [selectItem, setSelectItem] = useState([]);
  const [totalBid, setTotalBid] = useState(0);

  const handleItem = (auction) => {
    const favoritedAuction = {...auction, isFavorite: true};
    setSelectItem([...selectItem, favoritedAuction]);
    setTotalBid(totalBid + auction.currentBidPrice);
    
    // Update auctions array to mark this item as favorited
    if (auctions && Array.isArray(auctions)) {
      setAuctions(auctions.map(item =>
        item.id === auction.id ? {...item, isFavorite: true} : item
      ));
    }
    toast.success(`You bid on ${auction.title}! Good luck with your bid!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: { background: '#f0fdf4' }
    });
  }
  // console.log(totalBid);

  // // function for cancel the item
  // const bidprice = (time) => {
  //   console.log("hello")
  // }

  const handleRemove = (id, bidPrice) => {
    const itemToRemove = selectItem.find(item => item.id === id);
    const remaining = selectItem.filter(item => item.id !== id);
    setSelectItem(remaining);
    setTotalBid(totalBid - bidPrice);
    
    // Force update auctions to reset both isFavorite and trigger re-render
    if (auctions && Array.isArray(auctions)) {
      setAuctions(auctions.map(auction => 
        auction.id === id ? {...auction, isFavorite: false} : auction
      ));
    }

    if (itemToRemove) {
      toast.info(`${itemToRemove.title} removed! Item removed from favorites`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { background: '#f0fdf4' }
      });
    }
  }

  console.log(selectItem);

return (
    <>
    {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
    {/*-------------------------------------------------------Navbar section------------------------------------------------------------------- */}
    <Navbar></Navbar>
    {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
    {/*-------------------------------------------------------Banner section------------------------------------------------------------------- */}
    <Banner></Banner>
    {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
    {/*-------------------------------------------------------Main section heading part---------------------------------------------------------*/}
    <div className='mt-10 w-full px-4 sm:w-5/6 sm:mx-auto'>
        <h1 className='font-extrabold text-3xl text-gray-600'>Active Auctions</h1>
        <p className='text-sky-400 mt-2 font-bold'>Discover and bid on extraordinary items</p>
    </div>
    {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
    {/*-------------------------------------------------------Main section Table part------------------------------------------------------------------- */}
    <div className='main-container container mx-auto mt-10 flex flex-col lg:flex-row gap-5 px-4 sm:px-0'>
        <div className='left-container w-full lg:w-7/12 shadow-2xl rounded-lg px-5 border-amber-200'>
            <div className="">
              <table className="min-w-full table-auto">
                <thead className="hidden sm:table-header-group">
                  <tr className="text-center border-b-2 grid grid-cols-4 font-bold text-xl items-center">
                    <th className="py-4">Item</th>
                    <th className="py-4">Current Bid</th>
                    <th className="py-4">Time Left</th>
                    <th className="py-4">Bid Now</th>
                  </tr>
                </thead>
                
              </table>
            </div>

          
            <Auction handleItem={handleItem}></Auction>

        </div>


      {/* right-container */}
      <div className="right-container w-full lg:w-5/12 h-auto bg-white rounded-4xl shadow-2xl">
        <div className='flex items-center justify-center h-20 gap-3 border-rounded-2xl bg-slate-100'>
          <FaRegHeart size={30} className='' />
          <h1 className='font-bold text-2xl'>Favourite Items</h1>
        </div>
        {/* <div className="hr-bar">
          <hr className='text-purple-500'/>
        </div> */}
        {selectItem.length > 0 ? (
          selectItem.map((marked) => (
            <div className="card bg-base-100 mx-5 my-2 h-20 shadow-sm" key={marked.id}>
              <div className='flex items-center justify-between mx-3 my-auto'>
                <img className='w-13 h-13' src={marked.image}/>
                <div>
                  <h1 className='font-extrabold'>{marked.title}</h1>
                  <div className='flex gap-5 items-center'>
                    <h1 className='font-bold'>${marked.currentBidPrice}</h1>
                    <h1 className='font-bold'>Bids: {marked.bidsCount}</h1>
                  </div>
                </div>
                <button
                  className='btn btn-ghost'
                  onClick={() => handleRemove(marked.id, marked.currentBidPrice)}
                ><RxCross2 /></button>
              </div>
            </div>
          ))
        ) : (
          <div className="card bg-base-100 mx-5 my-2 p-4 shadow-sm text-center">
            <FaHeart className="mx-auto text-gray-400 mb-2" size={24} />
            <p className="text-gray-500 font-medium">No favorites yet</p>
            <p className="text-sm text-gray-400">Click the heart icon to add items</p>
          </div>
        )}
        <div className='flex justify-between items-center mx-5 bg-base-100 shadow-sm rounded-2xl px-2 py-4 my-3'>
          <div>
            <h1 className='font-bold'>Total Bids Amount</h1>
          </div>
          <div>
            <h1 className='font-bold'>${totalBid}</h1>
          </div>
        </div>
      </div>

      </div>


      {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
      {/*-------------------------------------------------------Footer section------------------------------------------------------------------- */}
      <Footer></Footer>
    <ToastContainer />
    </>
  )
}

export default App
