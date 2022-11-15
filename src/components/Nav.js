import React, {useState} from 'react';
import { AiOutlineMenu,  AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import Modal from './Modal';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    
     <div className='w-screen h-[80px] drop-shadow-lg z-10 mx-auto'>
      <div className='px-4 flex justify-between items-center w-full h-full '>
        <div className='flex items-center lg:mt-11 lg:mx-[100px]'>
         <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668159053/Group_k6z4vk.png" alt="logo" className="lg:w-38 w-32 md:w-36"/>
        </div>

        <div>
          <ul className='hidden lg:flex gap-8 lg:mt-14'>
          <Link to="/"><li className="red text-xl leading-6 text-[#434343] font-normal">Home</li></Link>
          <Link to="/place"><li className="red text-xl leading-6 text-[#434343] font-normal">Place to stay</li></Link>
          <li className="red text-xl leading-6 text-[#434343] font-normal">NFTs</li>
          <li className="red text-xl leading-6 text-[#434343] font-normal">Community</li>
          </ul>
        </div>

        <div className='lg:block hidden lg:mr-[100px]'>
          <Modal/>
          
        </div>
        <div className='lg:hidden mr-4' onClick={handleClick}>
            {!nav ? <AiOutlineMenu className='w-8 h-8 nav-color px2 py-2 rounded-md text-white' /> : <AiOutlineClose className='w-8 h-8 nav-color px2 py-2 rounded-md text-black' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute shadow-lg w-full px-8 bg-[#fff]'}>
      <Link to="/"><li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">Home</li></Link>
          <Link to="/place"><li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">Place to stay</li></Link>
          <li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">NFTs</li>
          <li className="red border-b-1 border-opacity-50 mt-3 mb-3 border-black text-xl leading-6 text-[#434343] font-normal cursor-pointer hover:bg-opacity-50 hover:bg-zinc-50 w-full">Community</li>
          <div className='flex flex-col my-4'>
          <Modal/>
          </div>
      </ul>
    </div>
  );
};

export default Navbar;
