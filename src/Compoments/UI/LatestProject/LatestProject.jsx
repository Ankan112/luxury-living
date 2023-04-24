import SectionTitle from "@/Compoments/Common/SectionTitle/SectionTitle";
import projectImage1 from "../../../../public/assets/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png"
import projectImage2 from "../../../../public/assets/Image/Mask Group-1.png"
import projectImage3 from "../../../../public/assets/Image/Mask Group.png"
import locationIcon from "../../../../public/assets/Icon/map-pin-2-fill.png"
import Image from "next/image";

const LatestProject = () => {
    return (
        <div className="container py-14">
            <SectionTitle title={'Projects'}
                des={'Discover the latest Interior Design available today'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                <div>
                    <div className="flex justify-center">
                        <Image className="" width={350} src={projectImage1} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-[20px] font-semibold color-primary mt-6 mb-3">Villa on Washington Avenue</h3>
                        <p className="text-base text-[#4D4F55]">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <Image width={350} className="max-h-[450]" src={projectImage2} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-[20px] font-semibold color-primary mt-6 mb-3">Luxury villa in Rego Park</h3>
                        <p className="text-base text-[#4D4F55]">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <Image width={350} src={projectImage3} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-[20px] font-semibold color-primary mt-6 mb-3">Gorgeous house</h3>
                        <p className="text-base text-[#4D4F55]">Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProject;