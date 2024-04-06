export default function Card(props){
    return(
        <div className=' min-w-[22rem] max-h-[22rem] lg:min-w-[30rem] lg:min-h-[30rem] rounded-[50%] border-[0.05rem] flex justify-center items-center mx-[0.88rem] '>
            <img src={props.source} className='  max-w-[20rem] max-h-[23rem] lg:min-w-[25rem] lg:max-h-[25rem] rounded-[50%]'></img>
        </div>
    );
}