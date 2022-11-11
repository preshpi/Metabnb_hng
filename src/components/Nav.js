import React, {useState} from 'react';
import { AiOutlineMenu,  AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen max-w-[1640px] h-[80px] z-10 fixed  mx-auto'>
      <div className='px-4 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
         <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668159053/Group_k6z4vk.png" alt="logo" className="lg:w-32 w-32 md:w-36"/>
        </div>

        <div>
        <ul className='hidden lg:flex gap-8'>
          <li className="red text-xl leading-6 text-[#434343] font-normal">Home</li>
          <li className="red text-xl leading-6 text-[#434343] font-normal">Place to stay</li>
          <li className="red text-xl leading-6 text-[#434343] font-normal">NFTs</li>
          <li className="red text-xl leading-6 text-[#434343] font-normal">Community</li>
          </ul>
        </div>

        <div className='hidden md:flex pr-4'>
          <button className='px-3 py-2 nav-color text-white rounded-[10px]'>Connect Wallet</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <AiOutlineMenu className='w-8 h-8 nav-color px2 py-2 rounded-md text-white' /> : <AiOutlineClose className='w-8 h-8 nav-color px2 py-2 rounded-md text-black' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute shadow-lg w-full px-8'}>
          <li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">Home</li>
          <li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">Place to stay</li>
          <li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">NFTs</li>
          <li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">Community</li>
          <div className='flex flex-col my-4'>
          <button className='px-3 py-3 nav-color text-white rounded-[10px]'>Connect Wallet</button>
          </div>
      </ul>
    </div>
  );
};

export default Navbar;