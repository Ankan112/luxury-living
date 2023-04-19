import SectionTitle from "@/Compoments/Common/SectionTitle/SectionTitle";
import Image from "next/image";

const LatestProject = () => {
    return (
        <div className="container py-14">
            <SectionTitle title={'Projects'}
                des={'Discover the latest Interior Design available today'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                <div>
                    <div>
                        <Image width={350} height={3} src={'/assets/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png'} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-[20px] font-semibold color-primary mt-6 mb-3">Villa on Washington Avenue</h3>
                        <p className="text-base text-[#4D4F55]">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <div className="">
                        <Image width={350} height={450} src={'/assets/Image/Mask Group-1.png'} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-[20px] font-semibold color-primary mt-6 mb-3">Luxury villa in Rego Park</h3>
                        <p className="text-base text-[#4D4F55]">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <div>
                        <Image width={350} height={3} src={'/assets/Image/Mask Group.png'} />
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