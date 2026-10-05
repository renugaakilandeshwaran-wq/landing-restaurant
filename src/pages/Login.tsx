import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import log1 from "../assets/log1.png"
function Login() {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl px-10 py-2 lg:py-0 lg:px-4 mx-auto">

            <div className="grid grid-cols-2 items-center justify-center">
                <div className="grid gap-5 mx-auto ">
                    <div className="lg:pb-5 lg:pt-0 -mt-20 lg:mt-0 flex items-center gap-3">
                        <h1 className="w-12 h-12 text-center rounded-full flex items-center justify-center bg-orange-400 text-white">D</h1>
                        <h1 className="font-bold text-xl">Delizi<span className="text-orange-400">oso</span></h1>

                    </div>
                    <div className="py-2">
                        <h1 className="text-4xl py-2 font-bold">Login</h1>
                        <h2>Don't have an account? <NavLink to="/signup" className="text-blue-700">Sign Up</NavLink></h2>
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="" className="text-xl">Email address</label>
                        <input type="text"
                            className="bg-gray-50 lg:w-82 w-62 px-2 py-2 rounded-lg"
                            placeholder="robertmartine@gmail.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="" className="text-xl">Password</label>
                        <input type="text"
                            className="bg-gray-50 lg:w-82 w-62 px-2 py-2 rounded-lg "
                            placeholder="*************"
                        />
                    </div>
                    <div className="lg:flex grid gap-5 justify-start  lg:justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <input type="checkbox"
                                className="w-5 h-5 text-sm lg:text-base rounded-full"
                            />
                            <label htmlFor="" className="text-[#5C4529]">Remember me</label>
                        </div>
                        <div>
                            <h1 className="text-[#5C4529]">Forget Password?</h1>
                        </div>
                    </div>
                    <div className="py-2 ">

                        <button
                            onClick={() => navigate("/home")}

                            className="bg-orange-400 rounded-lg text-white px-4 py-4 w-full">Log In</button>
                    </div>
                    <div className="py-4 bg-white rounded-lg w-full gap-3 px-2 justify-center border border-gray-300 flex items-center">
                        <FcGoogle />
                        <button className=" text-[#5C4529] ">Log In with google</button>
                    </div>
                    <div>
                        <h1 className="text-[#C7BFB6] text-center">Copyright © 2022 Delizioso</h1>
                    </div>
                </div>
                <div className="px-2 py-2">
                    <img src={log1} alt="" className="lg:block hidden" />
                </div>
            </div>

        </div>
    )
}

export default Login;