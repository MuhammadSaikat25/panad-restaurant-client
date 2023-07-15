import './featured.css'
import img from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Utils/SectionTitle';

const Featured = () => {
    return (
        <>
            <div className='bg-fixed bg-img lg:mt-[120px] '>
                <SectionTitle header={'---Check it out---'} subHeading={'FEATURED ITEM'}></SectionTitle>
                <div className="lg:flex items-center gap-3 w-full p-10">
                    <img className='hidden lg:block w-[150px] h-[150px] lg:w-[650px] lg:h-[400px] object-cover' src={img} alt="" />
                    <div className="text-gray-950 ">
                        <p className='bg-slate-100 bg-opacity-5'>March 20, 2023
                            WHERE CAN I GET SOME?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className='mt-5 text-gray-950 lg:text-white border-b-2 rounded-md'>Read more</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;