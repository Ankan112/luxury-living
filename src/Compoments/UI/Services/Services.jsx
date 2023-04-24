import Button from "@/Compoments/Common/Button/Button";
import SectionTitle from "@/Compoments/Common/SectionTitle/SectionTitle";
import Image from "next/image";

const Services = () => {
    return (
        <div className="">
            <div className="container py-14">
                <SectionTitle title={'Service'}
                    des={"We're an agency tailored to all clients' needs that always delivers"}
                ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    <div className="text-center p-5 shadow-box">
                        <div className="flex justify-center items-center">
                            <Image width={80} height={80} src={'/assets/Icon/apartment 1.png'} alt="icon1" />
                        </div>
                        <div>
                            <h2 className="text-[20px] font-semibold text-[#16322E] mt-2">Office Interior Design</h2>
                            <p className="text-[20px] font-semibold text-[#251D58] mb-3">$299</p>
                            <p className="font-base text-[#606268]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div className="text-center p-5 shadow-box">
                        <div className="flex justify-center items-center">
                            <Image width={80} height={80} src={'/assets/Icon/affordable 1.png'} alt="icon1" />
                        </div>
                        <div>
                            <h2 className="text-[20px] font-semibold text-[#16322E] mt-2">Showroom Design</h2>
                            <p className="text-[20px] font-semibold text-[#251D58] mb-3">$399</p>
                            <p className="font-base text-[#606268]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div className="text-center p-5 shadow-box">
                        <div className="flex justify-center items-center">
                            <Image width={80} height={80} src={'/assets/Icon/lessee 1.png'} alt="icon1" />
                        </div>
                        <div>
                            <h2 className="text-[20px] font-semibold text-[#16322E] mt-2">Residential/ Home</h2>
                            <p className="text-[20px] font-semibold text-[#251D58] mb-3">$499</p>
                            <p className="font-base text-[#606268]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <Button btn_text={'Explore More'}></Button>
                </div>
            </div>
        </div>
    );
};

export default Services;