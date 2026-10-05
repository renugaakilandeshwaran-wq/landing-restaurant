import home6 from "../assets/home6.png"
function Home6() {
    return (

        <div
            className="lg:w-[800px] mx-auto w-[250px] h-[250px] lg:h-[400px] bg-cover bg-center rounded-4xl relative lg:mt-40"
            style={{ backgroundImage: `url(${home6})` }}
        >
            {/* content */}
            <div className="mx-auto">
                <p className="absolute lg:top-12 top-5 left-10 lg:left-30 text-xl lg:text-6xl font-bold font-sans text-center px-4 text-white">We are open from</p>
                <h1 className="lg:text-3xl text-base lg:font-bold absolute -mt-4 lg:mt-0 lg:top-40 top-20 left-16 lg:left-60 text-center lg:px-4 text-white">Monday - Sunday</h1>
                <h1 className="lg:text-xl text-xs absolute lg:top-52 top-26 left-2 lg:left-60 text-center px-4 text-white">Launch : Mon-Sun : 11:00am-02:00pm</h1>
                <h1 className="lg:text-xl text-xs absolute top-30 left-2 lg:top-60 lg:left-60 text-center px-4 text-white">  Dinner : sunday : 04:00pm-08:00pm</h1>
                <h1 className="lg:text-xl text-xs absolute top-35 left-25 lg:top-69 lg:left-99 text-center px-4 text-white">04:00pm-09:00pm</h1>
                <div className="lg:flex grid lg:gap-5 gap-2 items-center justify-center px-4 py-4" >
                    <button className="text-center mt-40 lg:mt-80 text-xs lg:text-base lg:py-2 py-1 px-2 lg:px-8 w-fit bg-orange-400 text-white rounded-full">
                        Order Now
                    </button>
                    <button className="text-center lg:mt-80 text-xs lg:text-base  lg:py-2 py-1 px-2 lg:px-8 w-fit bg-white rounded-full">
                        Reservation
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home6;