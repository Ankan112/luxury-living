import Image from "next/image";
import locationIcon from "../../../../public/assets/Icon/map-pin-2-fill.png"
import icon1 from "../../../../public/assets/Icon/Vector.png"
import icon2 from "../../../../public/assets/Icon/Vector-1.png"
import icon3 from "../../../../public/assets/Icon/Vector-2.png"
import icon4 from "../../../../public/assets/Icon/Vector-3.png"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-[#251D58]">
            <div className="container text-white pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left">
                    <div className="flex justify-center">
                        <div className="mt-1">
                            <Image height={40} width={40} src={locationIcon}></Image>
                        </div>
                        <p className="font-medium text-base ml-2"> H#000 (0th Floor), Road #00,
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </p>
                    </div>
                    <div className="md:ml-20">
                        <h2 className="text-[20px] font-semibold">Company</h2>
                        <p className="">About</p>
                        <p>Project</p>
                        <p>Our Team</p>
                        <p>Terms Conditions</p>
                        <p>Submit Listing</p>
                    </div>
                    <div className="md:ml-10">
                        <h2 className="text-[20px] font-semibold">Quick Links</h2>
                        <p>Quick Links </p>
                        <p>Rentals </p>
                        <p>Sales </p>
                        <p>Contact </p>
                        <p>Our blog</p>
                    </div>
                    <div>
                        <h2 className="text-[20px] font-semibold">About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptas quos architecto vero at consectetur esse expedita enim corrupti iste?</p>
                        <div className="flex justify-between items-center mt-5">
                            <div><Image height={30} width={30} src={icon1}></Image></div>
                            <div><Image height={30} width={30} src={icon2}></Image></div>
                            <div><Image height={30} width={30} src={icon3}></Image></div>
                            <div><Image height={30} width={30} src={icon4}></Image></div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-10 text-gray-200">All Rights Reserved &copy; {year}. Luxury Living </p>
            </div>
        </div>
    );
};

export default Footer;