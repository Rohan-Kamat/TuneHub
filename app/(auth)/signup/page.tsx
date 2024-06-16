
export default function Page() {
    
    return (
        <div className="p-4 h-screen w-full flex justify-center items-center">
            <div className="container p-4 h-[96%] w-1/2 shadow-2xl bg-white rounded-lg ">
                <h1 className="text-center text-2xl">Sign-up to <span className="text-[#ef0f66]">TuneHub</span></h1>
                <div className="mt-10 w-4/6 ml-[17%]">

                    <form>
                        <div className="form-element mb-8">
                            <label htmlFor="name" className="text-gray-500 block">Name</label>
                            <input type="text" id="name" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ef0f66] focus:border-[#ef0f66] block w-full p-2.5" placeholder="Jason Herd" required />
                        </div>
                        <div className="form-element mb-8">
                            <label htmlFor="email" className="text-gray-500 block">Email</label>
                            <input type="email" id="email" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ef0f66] focus:border-[#ef0f66] block w-full p-2.5" placeholder="jasonherd@xyz.com" required />
                        </div>
                        <div className="flex justify-between w-full gap-10 mb-8">

                            <div className="form-element flex-1">
                                <label htmlFor="phone" className="text-gray-500 block">Phone Number</label>
                                <input type="tel" id="phone" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ef0f66] focus:border-[#ef0f66] block w-full p-2.5" placeholder="1234567890" required />
                            </div>
                            <div className="form-element flex-1 mt-2">
                                <input type="checkbox" name="displayPhone" id="displayPhone" className="w-4 h-4 border border-red-300 rounded checked:border-none checked:bg-[#ef0f66]"  />
                                <label htmlFor="displayPhone" className="text-gray-500 text-lg ml-2">Display Phone Number</label>
                                <p className="text-pink-500 text-[12px]">Select this option if you would like your phone number to be displayed on your profile.</p>
                            </div>
                        </div>
                        <div className="form-element mb-8">
                            <label htmlFor="password" className="text-gray-500 block">Password</label>
                            <input type="password" id="email" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ef0f66] focus:border-[#ef0f66] block w-full p-2.5" placeholder="Password123" required />
                        </div>
                        <div className="form-element mb-8">
                            <label htmlFor="password" className="text-gray-500 block">Confirm Password</label>
                            <input type="password" id="email" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ef0f66] focus:border-[#ef0f66] block w-full p-2.5" placeholder="Password123" required />
                        </div>
                        <div className="flex justify-end mb-8">
                            <input type="submit" value="Sign-up" className="btn-1" style={{
                                width: "100px",
                                fontSize: "15px"
                            }}/>
                        </div>
                        <hr />
                    </form>
                </div>
            </div>
        </div>
    )
}