import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
function Footer() {
  return (
    <div className="lg:h-[322px] bg-[#1D1D1E] text-[#F7F7F7]">
      <div className="mx-5 justify-center items-center place-items-center">
         <div className="grid lg:grid-cols-2  lg:mx-[113px]">
            <div className="w-[420px]">
              <div className="mt-14">
                  <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668273027/footer_dxtqdp.svg" alt="footer logo"/>
              </div>

              <div className="hidden lg:block">
              <div className="flex mt-20 gap-5 ">
                <GrFacebookOption className="w-[18px] text-[#F7F7F7] h-[18px]"/>
                <BsInstagram className="w-[18px] text-[#F7F7F7] h-[18px]"/>
                <AiOutlineTwitter className="w-[18px] text-[#F7F7F7] h-[18px]"/>
              </div>

              <div className="mt-12">
                <p className="font-[16px] leading-[16px]"><span className="mr-2">©</span>2022 Metabnb</p>
              </div>
              </div>           
            </div>

             <div className="lg:mt-10 mt-20 mb-20 lg:justify-around lg:gap-[80px]  gap-[10px] gap-70 lg:mr-[209px] mr-[99px] justify-center place-items-center">
               <div className="lg:grid-cols-3 md:grid-cols-2 gap-8 grid justify-center place-items-center items-center">
                  <div className="lg:h-24 justify-center items-center place-items-center ">
                    <h3 className="font-bold text-lg leading-5 text-[#FFFFFF] lg:text-start text-center">Community</h3>
                    <p className="mt-8 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">NFTs</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Tokens</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Landlords</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center mb-5">Discord</p>
                  </div>
                  <div className="lg:h-24">
                    <h3 className="font-bold text-lg leading-5 text-[#FFFFFF] lg:text-start text-center">Places</h3>
                    <p className="mt-8 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Castle</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Farm</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Beach</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center mb-5">Learn more</p>
                  </div>
                  <div className="lg:h-24">
                    <h3 className="font-bold text-lg leading-5 text-[#FFFFFF] lg:text-start text-center">About us</h3>
                    <p className="mt-8 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Road map</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Creators</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center">Career</p>
                    <p className="mt-2 text-[#F1F3F9] text-sm leading-8 font-normal lg:text-start text-center mb-3">Contact us</p>
                  </div>
                </div>
             </div> 


              <div className="justify-center items-center place-items-center lg:hidden md:hidden">
               <div className="flex mt-20 text-center gap-8">
                <GrFacebookOption className="w-[18px] text-[#F7F7F7] h-[18px]"/>
                <BsInstagram className="w-[18px] text-[#F7F7F7] h-[18px]"/>
                <AiOutlineTwitter className="w-[18px] text-[#F7F7F7] h-[18px]"/>
               </div>

              <div className="text-center flex mt-12 mb-8">
                <p className="font-[16px] leading-[16px] text-center"><span className="mr-2">©</span>2022 Metabnb</p>
              </div>
              </div>
 
         </div> 
      </div>

    </div>
  )
}

export default Footer