export default function Hero()
{
    return(
        <div className="flex justify-center w-full  items-center">
        <div className="absolute top-[13rem] md:top-[12rem]  lg:w-[56rem] ">
        <div className="flex flex-col">
        <h1 className="text-white font-aclonica text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] leading-[5rem] md:leading-[7rem]">Let's Create<br/><span className="flex flex-row">the look <div className=" flex flex-row">
        <div className="ml-[0.5rem] sm:ml-[3rem]">
            <img src={require("./../images/logo.jpeg")} className="w-[3.8rem] md:w-[6.5rem] rounded-[50%]"></img>
            </div>
            <div className=" w-[3rem] sm:w-[10rem] lg:w-[15rem] h-[0.2rem] bg-yellow-400 my-auto ml-[2%]"></div>
            </div></span>
            <div className="flex flex-row ">
            <div className='mr-[1rem] sm:mr-[3rem] border-[0.1rem] w-[6rem] sm:w-[10rem] md:w-[13rem] lg:w-[15rem] rounded-[50%] flex justify-center '><span className='font-sans text-[1rem] md:text-[3rem] font-thin'>AND</span></div>
            Feel for
            </div>
            Your Project
            </h1>
        

            </div>
        </div>
        </div>
    );
}