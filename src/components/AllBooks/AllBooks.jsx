import React from "react";
import Book1 from "../../assets/images/book1.jpg";
import Book2 from "../../assets/images/book2.jpg";
import Book3 from "../../assets/images/book3.jpg";
import Book4 from "../../assets/images/book4.jpg";
import Book5 from "../../assets/images/book5.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    { id: 1, img: Book1, title: "Lover in The Dark", rating: 5.0, author: "ibriz" },
    { id: 2, img: Book2, title: "Mafia Conflict", rating: 4.5, author: "ibriz" },
    { id: 3, img: Book3, title: "Glasses And Tattoos", rating: 4.7, author: "ibriz" },
    { id: 4, img: Book4, title: "Angels Dictionary", rating: 4.4, author: "ibriz" },
    { id: 5, img: Book5, title: "La Dona", rating: 4.6, author: "ibriz" },
]

const AllBooks = () => {
    return (
        <>
            <div className="py-10">
                <div className="container placeholder-gray-100">
                    <div data-aos="slide-up" className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">Best Books</p>
                        <h1 className="text-3xl font-bold">Top Books</h1>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.{""}
                        </p>
                    </div>
                    <div data-aos="slide-up">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                            {
                                BooksData.map((book) => (
                                    <div key={book.id} className="space-y-3">
                                        <img src={book.img} alt="" className="h-[200px] w-[150px] object-cover rounded-md" />
                                        <div>
                                            <h2 className="font-semibold">{book.title}</h2>
                                            <p className="text-sm text-gray-700 dark:text-gray-400">{book.author}</p>
                                            <div className="gap-1">
                                                <FaStar className="text-yellow-500" />
                                                <span>{book.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-full">View All Books</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllBooks;