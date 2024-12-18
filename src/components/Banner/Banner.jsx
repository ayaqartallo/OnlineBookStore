import React from "react";
import LibraryImg from '../../assets/images/library.jpg';
import { GrSecure } from "react-icons/gr";

const Banner = () => {
    return (
        <>
            <div className="py-10">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <div>
                            <img data-aos="zoom-in" src={LibraryImg} alt="" className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_20px_12px_rgba(0,0,0,1)] object-cover" />
                        </div>
                        <div data-aos="slide-up" className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 className="text-3xl sm:text-4xl font-bold">Library at your fingertips</h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non saepe reiciendis sint, architecto repudiandae sunt nihil molestias voluptate eveniet cum aliquid perspiciatis minus vel optio temporibus alias facere eius qui!</p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200 dark:bg-violet-400" />
                                    <p>Quality Books</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-200 dark:bg-orange-400" />
                                    <p>Fast Delivery</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 dark:bg-green-400" />
                                    <p>Easy Payment Method</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 dark:bg-yellow-400" />
                                    <p>Get Offers on Books</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;