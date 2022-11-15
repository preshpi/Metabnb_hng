import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
function Footer() {
  return (
      <div className="bg-[#1D1D1E] lg:h-[322px] md:h-[700px] h-[1150px]">
        <div className="lg:grid-cols-4 md:grid-cols-2 grid lg:mx-[113px] md:place-items-center md:items-center md:mx-11">
          <div className="mt-[62px] lg:place-items-start md:text-start text-center grid place-items-center ">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668273027/footer_dxtqdp.svg" alt="logo"/>

            <div className="lg:block md:block hidden ">
              <div className="mt-[106px] flex gap-12 text-[#F7F7F7]">
                <GrFacebookOption/>
                <BsInstagram/>
                <AiOutlineTwitter/>
              </div>

              <div className="mt-12 mb-[37px] font-[16px] leading-[16px] text-[#F7F7F7]">
                <span> © 2022 Metabnb</span>
              </div>             
            </div>
 
          </div>

          <div className="mt-[63px] grid place-items-center">
            <h3 className="font-bold text-lg leading-5 text-[#FFFFFF]">Community</h3>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-6">NFT</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Tokens</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Landlords</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Discords</p>
          </div>

          <div className="mt-[63px] grid place-items-center">
            <h3 className="font-bold text-lg leading-5 text-[#FFFFFF]">Places</h3>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-6">Castle</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Farms</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Beach</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Learn more</p>
          </div>

          <div className="mt-[63px] grid place-items-center">
            <h3 className="font-bold text-lg leading-5 text-[#FFFFFF]">About us</h3>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-6">Road map</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Creators</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Career</p>
            <p className="text-[#F1F3F9] text-sm leading-8 font-normal mt-4">Contact us</p>
          </div>

          <div className="lg:hidden md:hidden block grid place-items-center">
         <div className="mt-[106px] flex gap-12 text-[#F7F7F7]">
                <GrFacebookOption/>
                <BsInstagram/>
                <AiOutlineTwitter/>
          </div>

          <div className="mt-12 mb-[37px] font-[16px] leading-[16px] text-[#F7F7F7]">
                <span> © 2022 Metabnb</span>
          </div>            
          </div>

 
        </div>
      </div>
  )
}

export default Footer