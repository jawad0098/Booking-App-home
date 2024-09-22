import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import Image from 'next/image'
import footerImg from '../../public/WebImage/dfa.png'

function Footer() {
    const iconsTab = [
        { icon: <FaFacebookF /> },
        { icon: <AiOutlineTwitter /> },
        { icon: <AiFillYoutube /> },
        { icon: <BiLogoPinterestAlt /> },
    ];

    return (
        <>
            <footer className="bg-white">
                <div className="container max-w-7xl mx-auto py-[5rem]">
                    {/* Footer Content */}
                    <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
                        {/* Logo and Description */}
                        <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
                            <Image
                                src={footerImg}
                                alt="Picture of the author"

                            />
                            <p className="text-[15px] font-medium text-[#646464]">
                                Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                                {iconsTab.map((item, index) => (
                                    <div
                                        key={index}
                                        className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0310] hover:text-white transition-all duration-300"
                                    >
                                        {item.icon}
                                    </div>
                                ))}
                            </div>

                            <p className="text-[16px] font-medium text-[#646464]">
                                Privacy Policy | © {new Date().getFullYear()} Gymate <br />
                                Design by{" "}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.radiustheme.com/"
                                >
                                    RadiusTheme
                                </a>
                            </p>
                        </div>

                        {/* Classes Section */}
                        <div className="flex flex-col gap-8 relative">
                            <p className="text-[22px] font-bold footer-main">Our Classes</p>
                            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0310]"></span>

                            {["Fitness Classes", "Aerobics Classes", "Power Yoga", "Learn Machines", "Full-body Strength"].map((className, idx) => (
                                <p key={idx} className="text-[16px] hover:text-[#ff0310] cursor-pointer text-[#646464] font-medium hover:font-bold">
                                    {className}
                                </p>
                            ))}
                        </div>

                        {/* Working Hours Section */}
                        <div className="flex flex-col gap-8 relative">
                            <p className="text-[22px] font-bold footer-main">Working Hours</p>
                            <span className="top-[33px] absolute w-[10rem] h-[4px] bg-[#ff0310]"></span>

                            <p className="text-[16px] text-[#646464] font-bold">Monday - Friday:</p>
                            <p className="text-[16px] text-[#646464] font-medium">7:00am - 21:00pm</p>
                            <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
                            <p className="text-[16px] text-[#646464] font-medium">7:00am - 19:00pm</p>
                            <p className="text-[16px] text-[#646464] font-bold">Sunday - Closed</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
