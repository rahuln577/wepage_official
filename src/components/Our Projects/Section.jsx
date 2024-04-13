import Card from './Card'
import img from "./../../images/logo.jpeg"
import {useRef} from 'react'

export default function Section(){
    const card1=useRef();
    const card2=useRef();
    const card3=useRef();
    const section=useRef();
    const scroll=useRef();
    const scrollbar=useRef();

    function move(){
        card1.current.classList.add('card1');
        card2.current.classList.add('card2');
        card3.current.style.display='none';
        section.current.style.overflowX='scroll';
        section.current.classList.add('section');
        scroll.current.style.display='block';
    }
    function scrolling(){
        let cur=section.current.scrollLeft;
        let val=section.current.scrollWidth-section.current.clientWidth;
        let per=(cur/val)*100;
        scrollbar.current.style.width=per.toString()+'%';
    }

    return(
        <div id='work' className=' relative bottom-[7rem]'>
            <p className='font-space text-white font-bold text-[3rem] leading-[3.5rem] m-[3rem] tracking-wide'><span className='text-yellow-400'>Latest</span><br/>Projects </p>
            <div className='flex flex-row justify-end min-w-full ' >
    <div className=' overflow-scroll lg:overflow-hidden flex flex-row w-[100%] lg:w-[60rem] mx-[0] no-scroll' ref={section} onScroll={scrolling}>
     <div className='relative'>   
    <div ref={card1} className=' z-[3] lg:translate-x-[15%] min-w-[22rem] min-h-[22rem] lg:min-w-[30rem] lg:min-h-[30rem] rounded-[50%] border-[0.05rem] flex justify-center items-center mx-[0.88rem]  '>
            <img src={img} ref={card1} className=' z-[1] max-w-[20rem] max-h-[23rem] lg:min-w-[25rem] lg:max-h-[25rem] rounded-[50%]'></img>
        </div>
        </div>

        <div className='relative'>
        <div ref={card2} className=' z-[-1] lg:translate-x-[-20%] min-w-[22rem] min-h-[22rem] lg:min-w-[30rem] lg:min-h-[30rem] rounded-[50%] border-[0.05rem] flex justify-center items-center mx-[0.88rem] '>
            <img src={img} className=' z-[2] max-w-[20rem] max-h-[23rem] lg:min-w-[25rem] lg:max-h-[25rem] rounded-[50%]'></img>
        </div>
        </div>

        <div ref={card3} className='lg:block hidden'>
        <div  onClick={move}  className='translate-x-[-50%] cursor-pointer  w-[30rem] h-[30rem] rounded-[50%] border-[0.05rem] flex justify-start items-center mx-[0.88rem] bg-yellow-300 '>
            <p className='text-black text-[2rem] leading-7 font-semibold ml-8'>SEE<br/>ALL</p>
        </div>
        </div>
        <Card source={img}/>
        <Card source={img}/>
    </div>

    </div>
    <div ref={scroll} className='block lg:hidden w-[90%] h-[0.2rem] bg-black mx-auto mt-[2rem] mb-[1rem]'>
        <div className='w-[5%] bg-gray-200 h-[0.1rem]' ref={scrollbar}></div>
    </div>

    </div>);
}