import Link from "next/link";

export default function Page() {
    return (
        <div className="p-4 h-screen w-full flex justify-center items-center">
            <div className="p-4 h-[40%] w-[600px] shadow-2xl bg-white rounded-lg flex flex-col items-center">
                <h1 className="text-2xl text-center">Sign-up to <span className="text-[#ef0f66]">TuneHub</span></h1>
                <div className="p-4 w-5/6">
                    <p className="mt-4 w-[70%] text-start text-gray-500 text-lg">Sign up with</p>
                    <div className="buttons-container w-full flex flex-col mt-3">
                        <div className="sm:w-4/6 w-full">
                            <Link href="/signup">
                                <button className=" w-full p-3 flex gap-4 items-center border-gray-200 rounded-lg border-2 hover:bg-gray-200">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>Email and Password</p>
                                </button>
                            </Link>
                        </div>
                        <div className="sm:w-4/6 w-full mt-3">
                            <Link href="#">
                                <button className=" w-full p-3 flex gap-4 items-center border-gray-200 rounded-lg border-2 hover:bg-gray-200">
                                    <i className="fa-brands fa-google"></i>
                                    <p>Google</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        
    );
}