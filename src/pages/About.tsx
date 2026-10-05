import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";


function About() {
    return (
        <div className="max-w-7xl px-4 mx-auto ">
            {/* part1 */}
            <div className="grid items-center px-4 justify-center lg:grid-cols-[2fr_1fr]">
                <div className="lg:hidden block">
                    <h1 className="text-2xl font-bold text-center"><span className="text-orange-400 ">Our</span> restautant</h1>
                </div>
                <div>
                    <img src={about1} alt="" className="lg:w-full w-fit " />
                </div>
                <div className="grid gap-5 w-full items-center justify-center ">
                    <div className="lg:block hidden">
                        <h1 className="lg:text-6xl font-bold text-orange-400">Our</h1>
                        <h1 className="lg:text-6xl font-bold ">restautant</h1>
                    </div>

                    <p className="text-gray-700 lg:leading-8 lg:px-0 px-2 text-center lg:text-start ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
            </div>
            {/* part2 */}
            <div className="grid lg:grid-cols-[1fr_2fr] items-center px-4 justify-center">
                <div className="">
                    <div className="lg:hidden block">
                        <img src={about2} alt="" className="w-fit lg:w-full" />
                    </div>
                    <p className="leading-8 text-gray-700 lg:text-start text-center ">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit.
                    </p>
                </div>
                <div className="lg:block hidden">
                    <img src={about2} alt="" className="w-fit lg:w-full" />
                </div>
            </div>
            {/* part3 */}
            <div className="grid lg:grid-cols-[1fr_1fr] gap-5 items-center justify-center max-w-4xl mx-auto">
                <div className="lg:block hidden">
                    <img src={about3} alt="" className="lg:w-full w-fit h-fit " />
                </div>
                <div className="bg-orange-10 py-5 lg:grid gap-5 items-center lg:justify-center">
                    <h1 className="lg:hidden block text-xl text-center px-2 py-2 font-bold"><span className="text-orange-400 ">Owner</span> & Executive Chef Ismail Marzuki</h1>
                    <h1 className="text-orange-400 text-xl lg:text-6xl font-bold lg:block hidden ">Owner <span>& </span></h1>
                    <h1 className="text-xl lg:text-6xl font-bold lg:block hidden"> Executive Chef</h1>
                    <h2 className="text-xl lg:text-2xl font-bold lg:block hidden">Ismail Marzuki</h2>
                    <div className="lg:hidden block">
                        <img src={about3} alt="" className="lg:w-full w-42 rounded-lg mx-auto  h-60 " />
                    </div>
                    {/* <h1 className="text-orange-200 text-4xl">"</h1> */}
                    <p className="text-[#5C4529] lg:text-xl text-sm text-center leading-8 py-2 px-2 lg:px-0 lg:py-0 lg:leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    {/* <h1 className="text-orange-100">"</h1> */}
                </div>

            </div>
        </div>
    )
}

export default About;