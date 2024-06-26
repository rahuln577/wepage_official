import {useRef} from 'react'
import Hero from './Hero'

export default function Navbar(){
    const ham=useRef()
    let flag=false;
    function hammenu(){
        if(!flag)
        {
            ham.current.classList.add('out');
            ham.current.classList.remove('in');
            flag=true;
        }
        else{
            ham.current.classList.add('in');
            ham.current.classList.remove('out');
            flag=false;
        }
    }
    return(
        <div className='overflow-hidden'>
        <nav className="flex flex-row justify-between w-[95%] mx-auto mt-[2%] ">
            <div className="w-[3.5rem] rounded-[50%] overflow-hidden ">
            <img src={require("./../images/logo.jpeg")}></img>
            </div>
            <div className=" flex-row justify-between h-full w-[25rem] my-auto md:flex hidden">
                <a href="#work" className="text-white font-abril text-[1.3rem]">Work</a>
                <a href="#about" className="text-white font-abril text-[1.3rem]">About</a>
                <a href="#contact" className="text-white font-abril text-[1.3rem]">Contact</a>
            </div>
            <div onClick={hammenu} className="md:hidden flex flex-col justify-between h-[1.5rem] mt-[1rem]">
                <div className="bg-white w-[2rem] h-[0.15rem] rounded-sm"></div>
                <div className="bg-white w-[2rem] h-[0.15rem] rounded-sm"></div>
                <div className="bg-white w-[2rem] h-[0.15rem] rounded-sm"></div>
            </div>

        </nav>


        <div ref={ham}  className="w-[100%] h-[100vh] bottom-[4rem] bg-black relative z-[99] translate-x-[140%] ">
            <div className="flex flex-col h-[60%] mr-[3rem] justify-between items-end">
                <div onClick={hammenu} className="mt-[2rem] w-[2rem] h-[2rem]">
                    <div className="bg-white w-[2rem] h-[0.15rem] rounded-sm rotate-[45deg]"></div>
                    <div className="bg-white w-[2rem] h-[0.15rem] rounded-sm rotate-[-45deg]"></div>
                </div>
                <a href="#" className="text-white font-abril text-[2rem]">Work</a>
                <a href="#" className="text-white font-abril text-[2rem]">About</a>
                <a href="#" className="text-white font-abril text-[2rem]">Contact</a>
            </div>
        </div>
        
        </div>

    );
}