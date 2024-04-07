export default function OurServices()
{
    return(
        <div className="w-[80%] mx-auto ">
            <div className="flex flex-row justify-between items-center mb-[1rem]"><h1 className="text-white font-space text-[3rem] font-semibold tracking-wide">Services</h1>
            <div className="">
            <h1 className="text-white font-space text-[1.4rem] md:block hidden">WE'RE MUCH<br/> MORE THAN JUST<br/> A WEB AGENCY</h1></div>
            </div>

            <div className="flex lg:flex-row flex-col justify-center items-center">
                <div className="bg-red-400 w-[20rem] h-[27rem] md:w-[23rem] lg:w-[33%] md:h-[35rem] lg:h-[27rem]">
                    <div className="bg-red-300 w-full h-full rounded-b-[35%]">
                        <div className="w-[68%] mx-auto relative top-[7rem]">
                            <h1 className='font-space tracking-wider font-bold text-[2rem] text-yellow-800'>WEBSITES</h1>
                            <h1 className="font-space text-[1rem] text-yellow-800 ">We develop websites with all the requirements as per your needs.</h1>
                        </div>
                    </div>
                </div>

                <div className="bg-red-700 w-[20rem] h-[27rem] md:w-[23rem] lg:w-[33%] md:h-[35rem] lg:h-[27rem]">
                    <div className="bg-red-600 w-full h-full rounded-t-[35%] flex flex-row items-end">
                        <div className="w-[68%] mx-auto mb-[4rem]">
                            <h1 className='font-space tracking-wider font-bold text-[2rem] text-gray-300'>MOBILE APPS</h1>
                            <h1 className="font-space text-[1rem] text-gray-300">We develop cross-platform mobile apps with all the requirements as per your needs.</h1>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-900 w-[20rem] h-[27rem] md:w-[23rem] lg:w-[33%] md:h-[35rem] lg:h-[27rem]">
                    <div className="bg-blue-800 w-full h-full rounded-b-[35%]">
                        <div className="w-[68%] mx-auto relative top-[7rem]">
                            <h1 className='font-space tracking-wider font-bold text-[2rem] text-gray-300'>WEBSITES</h1>
                            <h1 className="font-space text-[1rem] text-gray-300">We develop websites with all the requirements as per your needs.</h1>
                        </div>
                    </div>
                </div>


                <div></div>
                <div></div>
            </div>
        </div>
    );
}