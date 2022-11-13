import React from 'react'

function Hero() {
  return (
    <div className='w-full h-full flex flex-col justify-between '>
        <div className='grid md:grid-cols-2  lg:max-w-[1600px] lg:mx-auto lg:mt-[162px]'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                 <h1 className="lg:text-6xl  text-4xl md:text-5xl lg:leading-[78px] md:leading-[50px] leading-[50px] font-normal tracking-wider text-[#434343] w-full">Rent a <strong className="text-[#A12278]">Place</strong> away from <strong className="text-[#A12278]">Home</strong> in the <strong className="text-[#A12278]">Metaverse</strong></h1>
                 <p className='lg:text-2xl text-x md:text-xl  lg:w-[636px] md:w-[398px] w-full h-[102px]  font-normal text-[#434343] leading-9 mt-12 mb-12'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone </p>
                 
                <form class="flex items-center">   
                    <div class="relative">
                        <input type="text" placeholder="Search for location" className="lg:w-[390px] md:w-[268px] w-full h-[54px] hero_input pl-3"/>
                    </div>
                    <button className="lg:w-[230px] w-[120px] h-[54px] bg-[#A12278] text-white text-base leading-4 font-normal ">
                        search
                    </button>
                </form> 
     
            </div>

            <div className="flex place-items-center justify-center mr-8 ml-8">
                <div>
                    <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668192636/image1_uxhscy.png" alt="house1" className="mt-52 mb-2 lg:mx-2 md:mt-28 mt-24"/>
                    <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668192636/image2_bwiwyn.png" alt="house2" className=""/> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668193069/image_3_ufh2sf.png" alt="house3" className="mb-2 mx-2  w-[234px] lg:h-[176px]  object-cover rounded-lg"/>
                    <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668193067/image_4_jj9yku.png" alt="house4" className="mx-2"/>
                </div>
            </div>
        <div>
        </div>
        </div>

        <div className="mt-24">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668194264/token_wkngrx.png" className="w-[1780px]"/>
        </div>
    </div>
  )
}

export default Hero