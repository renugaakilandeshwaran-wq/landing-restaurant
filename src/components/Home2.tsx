import home2 from "../assets/home2.png"

function Home2() {
    return (
        <>

            <div className="bg-green-50 px-10 py-10">
                <div className="grid lg:grid-cols-[2fr_2fr] items-center">
                    <div className="">
                        <img src={home2} alt="" />
                    </div>
                    {/* <div className="grid items-center  justify-center"> */}
                    <div className="lg:space-y-10 space-y-6">
                        <div>
                            <h1 className="lg:text-7xl text-3xl">Welcome to </h1>
                            <h1 className="lg:text-7xl text-3xl text-orange-400">delizioso</h1>
                        </div>
                        <p className="space-y-2 text-gray-700">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Facilisisbr
                            ultricies at eleifend proin.
                            Congue nibh nulla malesuada ultricies nec quam
                        </p>
                        <h1 className="text-white  bg-orange-400 w-fit rounded-full px-8 py-2 text-center">See our menu</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home2;