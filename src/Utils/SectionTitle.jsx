
const SectionTitle = ({ header, subHeading }) => {
    return (
        <div className="text-center mt-[92px] mb-[48px] space-y-3">
            <h1 className="text-yellow-500 ">{header}</h1>
            <h1 className="underline text-4xl">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;