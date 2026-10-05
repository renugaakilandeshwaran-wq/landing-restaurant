import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";


const images = [
    {
        id: 1,
        pic: img1,
        name: "Betran Komar",
        role: "Head chef"
    },
    {
        id: 2,
        pic: img2,
        name: "Ferry Sauwi",
        role: "Chef"
    },
    {
        id: 3,
        pic: img3,
        name: "Iswan Dracho",
        role: "Head chef"
    },
    {
        id: 4,
        pic: img2,
        name: "Ferry sauwri",
        role: "Chef"
    },
]
function Home4() {
    const [showAll, setShowAll] = useState(false);
    const visibleImages = showAll
        ? images
        : images.slice(0, 3);
    return (
        <section className="py-10 px-8 mx-auto">

            <h1 className="text-center text-6xl font-bold py-4">Our greatest chef</h1>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
                {visibleImages.map((item) => (
                    <div key={item.id} className="overflow-hidden rounded-2xl">
                        <div className="max-w-5xl mx-auto">
                            <img src={item.pic} alt={item.name} className="lg:w-52 w-fit lg:h-82 mx-auto object-cover " />

                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-sm lg:text-xl py-3">{item.name}</h2>
                            <p className="text-gray-500 text-sm lg:text-base lg:py-2">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* viewallbutton */}
            {images.length > 3 && (
                <div className="flex justify-center mt-8">
                    <button
                        className="px-8 py-3 bg-orange-400 text-white rounded-full"
                        onClick={() => setShowAll(!showAll)}>
                        {showAll ? "View less" : "View All"}
                    </button>
                </div>
            )}
        </section>
    )
}

export default Home4;