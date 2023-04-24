import Button from "@/Compoments/Common/Button/Button";
import SectionTitle from "@/Compoments/Common/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <div>
            <div className="container py-14">
                <SectionTitle
                    title={'Contact'}
                    des={'Let us handle your project, professionally.'}
                ></SectionTitle>
                <div className="mt-20">
                    <div className="flex justify-between md:w-3/4 mx-auto gap-5">
                        <input type="text" placeholder="First Name" className="input w-full rounded-lg px-5 h-16 bg-[#F1F3F6]" />
                        <input type="text" placeholder="First Name" className="input w-full rounded-lg px-5 h-16 bg-[#F1F3F6]" />
                    </div>
                    <div className="flex justify-between md:w-3/4 mx-auto gap-5 mt-5">
                        <input type="text" placeholder="Email Address" className="input w-full rounded-lg px-5 h-16 bg-[#F1F3F6]" />
                        <input type="text" placeholder="Phone Number" className="input w-full rounded-lg px-5 h-16 bg-[#F1F3F6]" />
                    </div>
                    <div className="md:w-3/4 mx-auto gap-5 mt-5">
                        <textarea type="text" placeholder="Your Message" className="textarea w-full rounded-lg py-3 px-5 h-32 bg-[#F1F3F6]" />
                    </div>
                    <div className="text-center mt-10">
                        <Button btn_text={'Send Message'}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;