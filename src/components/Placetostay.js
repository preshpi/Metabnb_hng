import React from 'react'
import Nav from '../components/Nav';
function Placetostay() {
  return (
    <div className="h-screen">
        <Nav/>

        <div className="flex">
          <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 lg:mt-[135px] justify-center lg:mx-[100px] gap-[48px] items-center place-items-center">
            <div>
              <p className="text-[#434343] w-[98px] h-[25px] leading-[25px] text-[20px]">Resturant</p>
            </div>
            <div>
            <p className="text-[#434343] w-[78px] h-[25px] leading-[25px] text-[20px]">Cottage</p>
            </div>
            <div>
            <p className="text-[#434343] w-[62px] h-[25px] leading-[25px] text-[20px]">Castle</p>
            </div>
            <div>
            <p className="text-[#434343] w-[122px] h-[25px] leading-[25px] text-[20px]">Fantast city</p>
            </div>
            <div>
            <p className="text-[#434343] w-[59px] h-[25px] leading-[25px] text-[20px]">Beach</p>
            </div>
            <div>
            <p className="text-[#434343] w-[76px] h-[25px] leading-[25px] text-[20px]">Carbins</p>
            </div>
            <div>
            <p className="text-[#434343] w-[77px] h-[25px] leading-[25px] text-[20px]">Off-grid</p>
            </div>
            <div>
            <p className="text-[#434343] w-[53px] h-[25px] leading-[25px] text-[20px]">Farm</p>
            </div>
          </div>

          <div className="mt-[129px]">
            <button class="border-[#B4B4B4] border border-1 bg-[#FFFF] rounded-[8px] py-2 px-3 inline-flex items-center">
              <span className="">Location</span>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668355129/setting-5_g1fnup.png" alt="location" className="ml-10"/>             
            </button>
            
          </div>
        </div>
    </div>
  )
}

export default Placetostay