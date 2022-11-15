import React, { useState } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Category from '../components/Category';

function Placetostay() {
  const[data, setData] = useState(Category);

 const  filterResult = (items) => {
  const result = Category.filter((curDate) => {
    return curDate.category === items;

  });
  setData(result);
 }

  return (
    <div className="">
        <Nav/>

        <div className="lg:flex">
          <div className="mt-5">
          <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 lg:mt-[135px] md:mt-[45px] justify-center lg:mx-[100px] gap-[48px] items-center place-items-center">
            <div>
              <p className="text-[#434343] w-[98px] h-[25px] leading-[25px] cursor-pointer text-[20px]">Resturant</p>
            </div>
            <div>
            <p className="text-[#434343] w-[78px] h-[25px] leading-[25px] cursor-pointer text-[20px]">Cottage</p>
            </div>
            <div>
            <p className="text-[#434343] w-[62px] h-[25px] leading-[25px] cursor-pointer text-[20px]">Castle</p>
            </div>
            <div>
            <p className="text-[#434343] w-[122px] h-[25px] leading-[25px] cursor-pointer text-[20px]">Fantast city</p>
            </div>
            <div>
            <p className="text-[#434343] w-[59px] h-[25px] leading-[25px] cursor-pointer text-[20px]">Beach</p>
            </div>
            <div>
            <p className="text-[#434343] w-[76px] h-[25px] leading-[25px] cursor-pointer text-[20px]">Carbins</p>
            </div>
            <div>
            <p className="text-[#434343] w-[77px] h-[25px] leading-[25px] cursor-pointer text-[20px]">off-grid</p>
            </div>
            <div>
            <p className="text-[#434343] w-[53px] h-[25px] leading-[25px] cursor-pointer text-[20px]">Farm</p>
            </div>
          </div>            
          </div>


          <div className="lg:mt-[129px] mt-16 mx-4">
            <button class="border-[#B4B4B4] border border-1 bg-[#FFFF] rounded-[8px] py-2 px-3 inline-flex items-center">
              <span className="">Location</span>
              <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668355129/setting-5_g1fnup.png" alt="location" className="ml-10"/>             
            </button>     
          </div>


        
  
        </div>



        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 justify-center mt-11 lg:mb-[53px] gap-5 lg:gap-0 mb-12 items-center place-items-center">
          {data.map((values) => {
            const{id, image} = values;
              return (
                <div key={id}>
                  <div className="cards w-[292px] lg:w-[350px] h-[422px] mt-5 justify-center items-center place-items-center ">
                    
                    <div className="justify-center items-center place-items-center grid mt-4">
                      <img src={image} alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center "/>
                    </div>

                    <div className="m-4">
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
                </div>
              )
          }  
          )}

          {/* <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[60px]  justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[20px] md:mx-[60px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[-10px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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

          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[100px] md:mx-[60px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center "/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[60px]  justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[20px] md:mx-[60px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[-10px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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

          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[100px] md:mx-[60px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center "/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[60px]  justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[20px] md:mx-[60px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[-10px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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

          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[100px] md:mx-[60px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center "/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[60px]  justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[20px] md:mx-[60px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
          <div className="cards  w-[292px] lg:w-[350px] h-[422px] mt-5 lg:mx-[-10px] justify-center items-center place-items-center">
            
            <div className="justify-center items-center place-items-center grid mt-4">
               <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668264931/Frame_151_g1kbjg.png" alt="Ntfs" className="lg:w-[300px] w-[270px] h-[300px] justify-center items-center place-items-center"/>
            </div>

            <div className="m-4">
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
 
          </div>  */}



          
        

         
        </div>

        <Footer/>
    </div>
  )
}

export default Placetostay