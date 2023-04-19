
const SectionTitle = ({ title, des }) => {
    return (
        <div className="text-center">
            <h2 className="text-base font-semibold text-[#251D58]">{title}</h2>
            <h1 className="text-4xl font-bold text-[#251D58] md:w-[60%] mx-auto">{des}</h1>
        </div>
    );
};

export default SectionTitle;