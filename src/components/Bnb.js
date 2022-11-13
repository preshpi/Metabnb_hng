import React from 'react'

function Bnb() {
  return (
    <div className="lg:h-[774px] h-full w-full bnb">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center place-items-center">
            <div className="lg:mt-[246px] lg:mb-[265px] mb-[30px] mx-[100px] mt-[100px] justify-center items-center place-items-center">
                <h1 className="bnb-title lg:w-[346px] w-[290px] md:w-[330px] lg:h-[60px] h-[50px] font-bold lg:text-5xl text-4xl lg:leading-[60px] leading-[50px]">Metabnb NFTs</h1>
                 <p className="bnb-text mt-[35px] lg:text-lg leading-[35px]">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. 
                    These NFTs gives our cutomer access to loads of our exclusive services.
                </p> 
                <button className="bnb-btn px-8 py-3 text-[#A02279] lg:mt-14 mt-12">Learn more</button>
            </div>

            <div className="lg:mt-[100px] mt-[10px] lg:mb-[99px] mb-[40px] justify-center items-center place-items-center">
                <div className="justify-center items-center place-items-center w-[320px] lg:w-full">
                    <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668335324/cards_scmmzg-removebg-preview_d2bufm.png" alt="img"/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Bnb