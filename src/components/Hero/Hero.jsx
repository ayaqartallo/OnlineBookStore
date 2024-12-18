import React, { useState } from "react";
import Book1 from "../../assets/images/book1.jpg";
import Book2 from "../../assets/images/book2.jpg";
import Book3 from "../../assets/images/book3.jpg";
import Vector from "../../assets/images/blue-pattern.png";

const ImagesList = [
    { id: 1, img: Book1, title: "Lover in The Dark", author: "ibriz", description: "Wolf Sierra, the Mafia Judge who governs the underworld's laws, marries a seemingly delicate Russian princess. Expecting a dull, sheltered partner, he’s shocked to discover her dark side when he finds her holding a gun with blood on her hands. What follows is a clash of two hidden monsters, entangled in a dark and unexpected love story." },
    { id: 2, img: Book2, title: "Mafia Conflict", author: "ibriz", description: "In Germany's underworld, rival clans Vedita and Capone unite against a mysterious threat. Ira, chaotic and cunning, disrupts Andre, the calm strategist, forging an unexpected bond amidst the darkness." },
    { id: 3, img: Book3, title: "Glasses And Tattoos", author: "ibriz", description: "A misunderstood girl, judged for her rebellious image, secretly admires Salvari Krova, a perfect student. As their contrasting worlds of chaos and order verge on collision, their intertwined story unfolds amidst car races and hidden passions." },
]


const Hero = ({ handleOrderPopup }) => {
    const [imageId, setImageId] = useState(Book1)
    const [title, setTitle] = useState("Lover in The Dark");
    const [author, setAuthor] = useState("ibriz");
    const [description, setDescription] = useState("Wolf Sierra, the Mafia Judge who governs the underworld's laws, marries a seemingly delicate Russian princess. Expecting a dull, sheltered partner, he’s shocked to discover her dark side when he finds her holding a gun with blood on her hands. What follows is a clash of two hidden monsters, entangled in a dark and unexpected love story.")

    const bgImages = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    }

    return (<>
        <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={bgImages}>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 data-aos="zoom-out" data-aos-duration="500" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                            {title}
                            <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">by {author}</p>
                        </h1>
                        <p data-aos="slide-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">
                            {description}
                        </p>
                        <div>
                            <button onClick={handleOrderPopup} data-aos="zoom-in" className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">Order Now</button>
                        </div>
                    </div>
                    <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                        <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                            <img data-aos="zoom-in" data-aos-once="true" src={imageId} alt="" className="w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" />
                        </div>
                        <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                            {
                                ImagesList.map((data) => (
                                    <img data-aos="zoom-in" data-aos-once="true" src={data.img} className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                                        onClick={
                                            () => {
                                                setImageId(data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3);
                                                setTitle(data.title);
                                                setAuthor(data.author);
                                                setDescription(data.description);
                                            }
                                        }
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Hero;