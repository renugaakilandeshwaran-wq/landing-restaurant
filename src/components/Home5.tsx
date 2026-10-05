import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";
import customer4 from "../assets/customer4.png";
import customer5 from "../assets/customer5.png";

function Home5() {
    return (
        <div>
            <div className="relative min-h-screen overflow-hidden py-10 lg:mt-50">
                <h1 className="text-center text-2xl lg:text-5xl font-bold">Our customers say</h1>
                <div className="mx-auto flex items-center justify-center  rounded-full w-fit overflow-hidden py-10 ">
                    <img src={customer1} alt="" className="rounded-full w-42 " />
                </div>
                <h1 className="text-2xl font-bold py-2 text-center ">Starla Virgoun</h1>
                <h1 className="text-center text-gray-700">Financial advisor</h1>
                <p className="max-w-[400px] px-4 space-y-3 mx-auto text-center"><span className="text-4xl font-bold  ">"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis ultricies at eleifend proin. Congue nibh nulla
                    malesuada ultricies nec quam  <span className="text-2xl font-bold">"</span></p>
                {/* Circle 1 */}
                <div className="absolute lg:top-20 lg:left-10 lg:w-20 lg:h-20 w-10 h-10 top-65 left-12 rounded-full bg-orange-200"></div>

                {/* Circle 2 */}
                <div className="absolute lg:top-100 lg:left-20 top-65 left-68 w-8 h-8 rounded-full bg-pink-100"></div>

                {/* Circle 3 */}
                <div className="absolute bottom-10 top-1 lg:right-60 right-70 lg:top-100 w-8 h-8 lg:w-20 lg:h-20 rounded-full bg-green-100"></div>


                {/* Actual content */}
                <div className="relative z-10">
                    <div className="pt-50 ">
                        <div className="mx-auto flex items-center justify-center rounded-full  bg-orange-500 border-8 lg:border-30  border-orange-100 rounded-full w-fit overflow-hidden ">
                            <img src={customer1} alt="" className="rounded-full w-18  lg:w-42 border-8 lg:border-20 border-orange-300" />
                        </div>
                    </div>

                    <div>
                        <img src={customer2} alt="" className="absolute rounded-full lg:top-60 top-50 left-15 w-12 lg:left-80 lg:w-28" />
                        <img src={customer3} alt="" className="absolute rounded-full object-cover right-15 top-50 lg:right-80 lg:top-60 lg:w-28 w-12" />
                        <img src={customer4} alt="" className="absolute rounded-full lg:top-35 top-45 left-6 lg:left-50 lg:w-28 w-8" />
                        <img src={customer5} alt="" className="absolute rounded-full object-cover right-6 top-45 w-8 lg:right-50 lg:top-35 lg:w-28" />

                    </div>
                </div>
                <div className="absolute lg:bottom-155  lg:left-1/2 left-1/2 top-130 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-blue-100"></div>

                <div className="absolute lg:bottom-150 bottom-20 left-69 top-145 lg:left-35 w-6 h-6 lg:w-16 lg:h-16 rounded-full bg-gray-300"></div>
                <div className="absolute lg:bottom-150 bottom-20 right-69 top-145 lg:right-35 w-6 h-6 lg:w-16 lg:h-16 rounded-full bg-gray-300"></div>

                <div className="absolute top-25 right-0 lg:top-10 lg:right-20 w-12 h-12 rounded-full bg-[#F3A7FF87]"></div>

            </div>
        </div>
    )
}

export default Home5;