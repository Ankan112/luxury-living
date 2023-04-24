import Image from "next/image";
import image1 from "../../../../public/assets/Image/Ellipse 90.png"
import image2 from "../../../../public/assets/Image/Ellipse 91.png"
import image3 from "../../../../public/assets/Image/Ellipse 92.png"
import star from "../../../../public/assets/Icon/Group 33040.png"

const Testimonials = () => {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="container py-14">
                <h2 className="text-[34px] font-bold text-center">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                    <div className="p-10 bg-white">
                        <div className="flex items-center">
                            <div>
                                <Image width={64} height={64} src={image1} alt="image1"></Image>
                            </div>
                            <div className="ml-3">
                                <h4 className="text-[20px] font-semibold">Nash Patrik</h4>
                                <p className="text-base font-medium">CEO, Manpol</p>
                            </div>
                        </div>
                        <p className="text-[#707070] mt-6 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum adipisci aliquid quidem ea vero est sint reiciendis porro.</p>
                        <div className="flex mt-8">
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                        </div>
                    </div>
                    <div className="p-10 bg-white">
                        <div className="flex items-center">
                            <div>
                                <Image width={64} height={64} src={image2} alt="image1"></Image>
                            </div>
                            <div className="ml-3">
                                <h4 className="text-[20px] font-semibold">Miriam Barron</h4>
                                <p className="text-base font-medium">CEO, Manpol</p>
                            </div>
                        </div>
                        <p className="text-[#707070] mt-6 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum adipisci aliquid quidem ea vero est sint reiciendis porro.</p>
                        <div className="flex mt-8">
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                        </div>
                    </div>
                    <div className="p-10 bg-white">
                        <div className="flex items-center">
                            <div>
                                <Image width={64} height={64} src={image3} alt="image1"></Image>
                            </div>
                            <div className="ml-3">
                                <h4 className="text-[20px] font-semibold">Bria Malone</h4>
                                <p className="text-base font-medium">CEO, Manpol</p>
                            </div>
                        </div>
                        <p className="text-[#707070] mt-6 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum adipisci aliquid quidem ea vero est sint reiciendis porro.</p>
                        <div className="flex mt-8">
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                            <div><Image height={24} width={24} src={star} alt="star"></Image></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;