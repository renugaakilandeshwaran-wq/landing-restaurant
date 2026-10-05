import home from "../assets/home.png"
function Home1() {
    return (
        <>
            <div className="lg:mt-20 lg:mb-50 px-10">
                <div className="grid  lg:grid-cols-[3fr_3fr] gap-5 lg:px-4 mx-auto w-full">
                    <div className="grid  items-center ">
                        <h1 className="text-orange-600 bg-orange-100 w-fit rounded-full px-8 py-1">Restauran</h1>
                        <h1 className="text-7xl font-bold">Italian <br /> Cuisine</h1>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sodales senectus dictum arcu sit tristique donec eget.</p>
                        <div className="flex gap-5 py-4 items-center">
                            <h1 className="text-white bg-orange-400 w-fit rounded-full px-4 lg:px-8 py-2 text-center">Order now</h1>
                            <h1 className="text-white bg-green-600 w-fit rounded-full px-4 lg:px-8 py-2 text-center">Reservation</h1>
                        </div>
                    </div>
                    <div className="">
                        <img src={home} alt="HomeImage" className="mx-auto w-full" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home1;