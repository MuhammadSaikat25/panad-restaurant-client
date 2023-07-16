import  './CoverImg.css'
const DessertCoverImg = () => {
    return (
        <div className="img bg-fixed h-[250px] lg:h-[700px] relative w-full text-center mb-10">
            <div className=" bg-black rounded absolute h-[70px] top-20 left-24 bg-opacity-30 text-white lg:h-[300px] lg:w-[800px] lg:top-[200px] lg:left-[400px] ">
                <div className="p-2 lg:p-20 space-y-3">
                    <h1 className='lg:font-semibold lg:text-4xl'>DESSERTS</h1>
                    <p className='hidden lg:text-2xl lg:block'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    );
};

export default DessertCoverImg;