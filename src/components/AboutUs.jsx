export default function AboutUs(){
    return(
        <div className="flex flex-col lg:flex-row w-[80%] mx-auto justify-between items-center my-[8rem]">
          <div className="border-[0.1rem] rounded-[50%] h-[23rem] min-w-[23rem] mb-[2rem] flex lg:hidden flex-row justify-center items-center">
                <div className='border-[0.1rem] rounded-[50%] h-[20rem] w-[20rem] flex flex-row justify-center items-center'>
                    <h1 className="font-space text-white text-[1.2rem]">ABOUT US</h1>
                </div>
            </div>
            <div>
                <h1 className="font-space text-white text-[1.8rem] lg:mr-[2rem]">FOUNDED IN 2024, WE'RE A FRESH WEB DEVELOPMENT AGENCY CRAFTING MODERN WEB EXPERIENCES AND CROSS-PLATFORM MOBILE APPS. </h1>
            </div>
            <div className="border-[0.1rem] rounded-[50%] h-[23rem] min-w-[23rem] hidden lg:flex flex-row justify-center items-center">
                <div className='border-[0.1rem] rounded-[50%] h-[20rem] w-[20rem] flex flex-row justify-center items-center'>
                    <h1 className="font-space text-white text-[1.2rem]">ABOUT US</h1>
                </div>
            </div>
        </div>
    );
}