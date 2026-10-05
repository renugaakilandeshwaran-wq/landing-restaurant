import home3 from "../assets/home3.png"
function Home3() {
    return (
        <>
            <div className="grid lg:grid-cols-2 lg:px-10 px-8 py-4 gap-5 lg:gap-0 mt-30 bg-orange-50 lg:mt-60 lg:py-10 items-center mx-auto justify-center ">
                <div className="lg:py-10 lg:px-10">
                    <img src={home3} alt="" />
                </div>
                <div className=" lg:py-10 lg:px-10 space-y-6">
                    <div className="">
                        <h1 className="text-6xl  ">Let's reserve</h1>
                        <h1 className="text-6xl font-bold text-orange-400">a Table</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin.
                        Congue nibh nulla malesuada ultricies nec quam </p>
                    <button className="text-white  bg-orange-400 w-fit rounded-full px-8 py-2 text-center">
                        Reservation
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home3;