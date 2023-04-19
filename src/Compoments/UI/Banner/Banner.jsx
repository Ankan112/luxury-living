import Button from "@/Compoments/Common/Button/Button";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="bg-[#F7F7F7]">
            <div className="container py-14">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full flex justify-center items-center">
                        <div>
                            <h2 className="font-bold text-5xl md:text-6xl color-primary">We Build <br /> Your Dream</h2>
                            <p className="text-base text-[#606268] my-6 md:w-[85%]">Online Easte Agency, the mordern way to sell your own home,
                                You can use Griffin Residential to market your property</p>
                            <Button btn_text={'Booking'}></Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full mt-8 md:mt-0">
                        <Image width={550} height={500} src={'/assets/Image/banner.png'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;