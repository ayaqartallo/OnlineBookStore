import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },{
        title: "About",
        link: "/#about",
    },{
        title: "Contact",
        link: "/#contact",
    },{
        title: "Blog",
        link: "/#bolg",
    },
];

const Footer = () => {
    return (
        <div className="bg-gray-100 drak:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 py-5">
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Literary Haven </h1>
                        <p>Discover your next great read at Literary Haven. From bestsellers to hidden gems, we offer a wide selection of books in every genre. Enjoy easy browsing, fast delivery, and personalized recommendations, all from the comfort of your home.{''}</p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Palestine, Nablus</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>00970 599 999 999</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a><a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((item)=>(
                                            <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                                <span>&#11162;</span>
                                                <span>{item.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((item)=>(
                                            <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                                <span>&#11162;</span>
                                                <span>{item.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((item)=>(
                                            <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                                <span>&#11162;</span>
                                                <span>{item.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-t-2 border-gray-300/50">
                        <p className="text-center py-10">Copyright &copy; 2024. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;