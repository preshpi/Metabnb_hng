import React from 'react'

function Cards () {
  return (
    <div className="w-full my-16 lg:my-12 md:my-20">
        {/* <div>
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668194264/token_wkngrx.png" className="w-[1780px]"/>
        </div> */}
        {/* <div className="row-img mt-16 lg:w-[1800px] md:[600px]">
           <div className="flex justify-around gap-8">
            <div className="lg:w-[533px] md:w-[20px]  items-center grid place-items-center">
             <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668194741/coin_m9xagi.svg" alt="coinimage"/>
            </div>

            <div className="lg:w-[533px] md:w-[200px] items-center grid place-items-center">
             <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668194849/mbtoken_knh8pd.svg" alt="metaimage"/>
            </div>

            <div className="lg:w-[551px] md:w-[10px]  items-center grid place-items-center">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668194959/open_fykwax.svg" alt="openseaimage"/>
            </div>            
           </div>
        </div> */}

        <div className="text-[#000000] leading-[60px] md:leading-[40px] leading-[30px] font-normal lg:text-5xl text-3xl font-bold grid place-items-cente justify-center ">
            <h2 className="text-center">Inspiration for your next adventure</h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 justify-center m-28 md:m-20">
          <div className="cards  w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="w-[260px] h-[265px] justify-center items-center place-items-center"/>
            <div className="flex justify-between">
              <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
              <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
            </div>

            <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mb-4 mt-2">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>              
            </div>            
          </div>

          <div className="cards w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264713/Frame_2_qejt1g.png" alt="Ntfs"/>
              <div className="flex justify-between">
                <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
                <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
              </div>         
              <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>     
            </div>



          </div>

          <div className="cards  w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264714/Frame_3_cp1lzi.png" alt="Ntfs"/>
            <div className="flex justify-between">
              <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
              <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
            </div>

            <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mt-2">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>
            </div>
          </div>


          <div className="cards  w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">

            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264716/Frame_4_u0yqa8.png" alt="Ntfs"/>
            <div className="flex justify-between">
              <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
              <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
            </div>

            <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>           
            </div>
          </div>

          <div className="cards  w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264717/Frame_5_ioefvd.png" alt="Ntfs"/>
            <div className="flex justify-between">
              <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
              <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
            </div>

            <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>              
            </div>

          </div>


          <div className="cards  w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264720/Frame_6_tul1jq.png" alt="Ntfs"/>
            <div className="flex justify-between">
              <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
              <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
            </div>

            <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>              
            </div>

          </div>

          <div className="cards  w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264717/Frame_7_usmbvt.png" alt="Ntfs"/>
            <div className="flex justify-between">
              <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
              <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
            </div>

            <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>              
            </div>

          </div>

          <div className="cards  w-[292px] h-[372px] m-5 justify-center items-center place-items-center">
            <div className="m-4">
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264720/Frame_8_opjcei.png" alt="Ntfs"/>
            <div className="flex justify-between">
              <p className="text-[#434343] font-normal text-xs leading-3 mt-3">Desert King</p>
              <p className="font-bold text-xs leading-3 mt-3 text-[#434343]">1MBT per night</p>
            </div>

            <div className="flex justify-between">
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3 w-[83px] h-[14px]">2345km away</p>
              <p className="mt-2 font-normal text-xs text-[#434343] leading-3">available for 2weeks stay</p>
            </div>

            <div className="flex gap-2 mt-2">
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668265602/Star_bh0co8.png" alt="stars"/>    
            </div>              
            </div>

          </div>
        </div>

    </div>
  )
}

export default Cards  