export default function ContactUs(){
    return(
        <div id='contact' className="flex flex-col lg:flex-row w-[80%] mx-auto justify-between items-center my-[8rem]">
          <div className="border-[0.1rem] rounded-[50%] h-[23rem] min-w-[23rem] mb-[2rem] flex  flex-row justify-center items-center">
                <div className='border-[0.1rem] rounded-[50%] h-[20rem] w-[20rem] flex flex-row justify-center items-center'>
                    <h1 className="font-space text-white text-[1.2rem]">CONTACT US</h1>
                </div>
            </div>
            <div>
                <h1 className="font-space text-white text-[1.6rem] md:text-[1.8rem] lg:mr-[2rem]">Ph: +91-9844769899,+91-6363013529<br/> Email: wepagesolutions@gmail.com </h1>
            </div>
        </div>
    );
}