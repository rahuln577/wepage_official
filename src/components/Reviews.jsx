import box from './../images/box.png'
import larrow from './../images/larrow.png'
import rarrow from './../images/rarrow.png'
import {useEffect, useState} from 'react'

export default function Reviews()
{
    let reviews=['"Very nice service .Keep it up."', '"Very good service with acceptance to changes,highly satisfied."']
    let cust=["-Signode Men's Wear","-Axis Texhnologies"]
    let [pos,setpos]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setpos((prev)=>{
                return((prev+1)%2);
            })
           
        },3000);
        return ()=>clearInterval(interval)
    },[pos])

    function left()
    {
        setpos((prev)=>{
            if(prev==0)setpos(1);
            else setpos(prev-1);
        })
    }
    
    
    function right()
    {
        setpos((prev)=>{
            if(prev==1)setpos(0);
            else setpos(prev+1);
        })
    }

    return(<div className="flex flex-col w-[80%] mx-auto mt-[10rem]">
        <h1 className='font-space text-[3rem] text-yellow-300 font-semibold tracking-wide mb-[2rem]'>Reviews</h1>
        <div className="flex flex-row justify-center">
            <div className='flex flex-col h-[20rem] lg:h-[25rem] justify-between'>
                <div className='w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] rounded-[50%] bg-green-500 flex justify-center items-center'><img src={box} className='w-[3rem] h-[3rem] lg:w-[6rem] lg:h-[6rem]'></img></div>
                <div className='flex flex-row'>
                    <div onClick={left}  className='cursor-pointer w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] rounded-[50%] bg-red-300 flex justify-center items-center '><img src={larrow} className='w-[2rem] h-[2rem]'></img></div>
                    <div onClick={right}  className='cursor-pointer w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] rounded-[50%] bg-red-300 flex justify-center items-center '><img src={rarrow} className='w-[2rem] h-[2rem]'></img></div>

                </div>
            </div>

            <div className='w-[15rem] md:min-w-[13rem] h-[20rem] lg:w-[15rem] bg-yellow-300 lg:h-[24rem] rounded-[30%] flex justify-center items-center'>
                <div className='w-[10rem] h-[10rem]'><h1 className='text-black font-semibold font-space text-[1rem]'>{reviews[pos]}<br/><span className='text-[0.8rem]'>{cust[pos]}</span></h1></div>
            </div>
            <div className='bg-blue-500 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-[50%] md:flex hidden justify-center items-center' ><div className="w-[14rem] h-[10rem]"><h1 className='text-black text-[2rem] font-space'>"Let us build your next app & website."</h1></div></div>
        </div>

    </div>);
}