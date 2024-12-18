import React from "react";
import Book1 from "../../assets/images/book1.jpg";
import Book2 from "../../assets/images/book2.jpg";
import Book3 from "../../assets/images/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    { id: 1, img: Book1, title: "Lover in The Dark", author: "ibriz", description: "Wolf Sierra, the Mafia Judge who governs the underworld's laws, marries a seemingly delicate Russian princess. Expecting a dull, sheltered partner, he’s shocked to discover her dark side when he finds her holding a gun with blood on her hands. What follows is a clash of two hidden monsters, entangled in a dark and unexpected love story." },
    { id: 2, img: Book2, title: "Mafia Conflict", author: "ibriz", description: "In Germany's underworld, rival clans Vedita and Capone unite against a mysterious threat. Ira, chaotic and cunning, disrupts Andre, the calm strategist, forging an unexpected bond amidst the darkness." },
    { id: 3, img: Book3, title: "Glasses And Tattoos", author: "ibriz", description: "A misunderstood girl, judged for her rebellious image, secretly admires Salvari Krova, a perfect student. As their contrasting worlds of chaos and order verge on collision, their intertwined story unfolds amidst car races and hidden passions." },
]
const BestBooks = ({handleOrderPopup}) => {
    return <>
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">Trending Books</p>
                    <h1 className="text-3xl font-bold">Best Book</h1>
                    <p className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.{""}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                    {
                        BooksData.map((book) => (
                            <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                                <div className="h-[100px]">
                                    <img src={book.img} alt="" className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md" />
                                </div>
                                <div className="p-4 text-center">
                                    <div className="w-full flex items-center justify-center">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className="text-xl font-bold">{book.title}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.description}</p>
                                    <button onClick={handleOrderPopup} className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary">Order Now</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    </>;
};

export default BestBooks;