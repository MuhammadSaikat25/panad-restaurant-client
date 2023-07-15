import img from '../../assets/home/chef-service.jpg'
const Restaurant = () => {
    return (
        <div className='relative mt-16 lg:mt-[162px]'>
            <img className='w-full h-[300px] lg:h-[400px] object-cover' src={img} alt="" />
            <div className='p-3 top-20 left-10 w-[78%] text-center absolute bg-white rounded-md lg:top-[110px] lg:p-10 lg:w-[50%] lg:left-[300px] '>
               <h1 className='mb-2 font-semibold'>PANDA RESTAURANT</h1>
                <p className='text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Restaurant;