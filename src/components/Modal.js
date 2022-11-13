import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { HiChevronRight } from 'react-icons/hi';
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-3 py-2 nav-color text-white rounded-[10px] mt-11"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Connect wallet
      </button>
      {showModal ? (
        <>
          <div className="h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl h-[248px]">
              {/*content*/}
              <div className="border-0 rounded-[16px] shadow-lg relative flex flex-col w-full bg-[#FFFFFF] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex gap-3 p-4 justify-between border-b border-solid border-[#CFD8DC] rounded-t">             
                        <div className="mx-4">
                        <h3 className="text-2xl font-bold text-[#333333] leading-7">
                        Connect Wallet
                        </h3>                            
                        </div>

                        <div className="">
                        <button
                            className="text-end text-[#333333] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                        <AiOutlineClose/>
                        </button>                              
                        </div>                                  
                </div>

                {/*body*/}

                <div>
                    <p className="text-[#333333] mx-8 mt-[32px] mb-[16px] text-start text-base leading-5">Choose your preferred wallet:</p>

                    <div className="grid mx-8">
                        <div className="flex rounded-[12px] border-[#CFD8DC] border-solid border hover:bg-[#F8F9FA] bg-[#FFFFFF] cursor-pointer">
                        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668343322/fox_zav4x0.png" alt="logo" className="mx-5 mt-5 w-[44px] h-[44px] justify-center items-center place-items-center grid"/>
                        <span className="mt-5 mb-5 justify-center items-center place-items-center grid">Metamask</span>
                        <HiChevronRight className="mt-[26px] mb-[26px] ml-[328px] text-2xl text-[#959DA6]"/>
                        {/* <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668344269/arrow_rwvw8i.png" alt="arrow" className="w-[15px] h-[8px] mt-5 mb-5 text-end"/> */}
                        </div>

                        <div className="flex rounded-[12px] border-[#CFD8DC] border-solid border hover:bg-[#F8F9FA] bg-[#FFFFFF] cursor-pointer mt-3 mb-10">
                            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668343353/wallet_wca6ns.png" alt="logo wallet" className="mx-5 mt-5 w-[40px] h-[40px] justify-center items-center place-items-center grid"/>
                            <span className="mt-5 mb-5 justify-center items-center place-items-center grid">WalletConnect</span>
                            <HiChevronRight className="mt-[26px] mb-[26px] ml-[296px] text-2xl text-[#959DA6]"/>
                        </div>
                    </div>
                </div>

                {/* <div className="relative p-6 flex-auto">

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div> */}

              </div>
            </div>
          </div>
          <div className="opacity-25 h-screen fixed inset-0 z-40 bg-[#404040]"></div>
        </>
      ) : null}
    </>
  );
}